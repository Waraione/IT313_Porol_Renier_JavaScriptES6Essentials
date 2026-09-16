import { computeAverage } from "./gradeUtils.js";
import isPassing from "./gradeUtils.js";

const enrollees = [
  { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 },
];

const getEnrollees = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(enrollees), 1000);
  });

const generateReport = async () => {
  try {
    const records = await getEnrollees();

    const results = records.map(({ name, prelim, midterm, final }) => {
      const average = computeAverage(prelim, midterm, final);

      return {
        name,
        average,
        status: isPassing(average) ? "PASSING" : "PROBATION",
      };
    });

    const passing = results.filter(({ status }) => status === "PASSING");

    const classAverage =
      results.reduce((total, { average }) => total + average, 0) /
      results.length;

    const report = `=== IT313 Enrollment Eligibility Report ===
${results
  .map(
    ({ name, average, status }) =>
      `${name} - Average: ${average.toFixed(2)} - ${status}`
  )
  .join("\n")}
Class Average: ${classAverage.toFixed(2)}
Passing: ${passing.length} / ${results.length}`;

    console.log(report);
  } catch (error) {
    console.error(`Failed to retrieve enrollee records: ${error.message}`);
  }
};

generateReport();