IT313 Enrollment Eligibility Checker
Problem

The program processes IT313 enrollee records and determines whether each student is PASSING or on PROBATION.

A student is passing when their average of the prelim, midterm, and final grades is 75 or higher.

Approach

The project demonstrates modern JavaScript ES6+ features:

const is used for values that are not reassigned.
Arrow functions provide concise function syntax.
Template literals format the final report.
Destructuring extracts properties from enrollee objects.
map() creates the eligibility results.
filter() separates passing students.
reduce() calculates the class average.
ES modules are used to import and export functions between files.
Promises simulate retrieving records from a registrar API.
async/await waits for the Promise result.
try/catch handles a failed simulated connection.
Files
main.js — retrieves the records and generates the report.
gradeUtils.js — contains the average and passing-status functions.
package.json — configures Node.js to use ES modules.
README.md — project documentation.
How to Run

Make sure Node.js is installed.

Open a terminal in the project folder and run:

node main.js


Expected Output
=== IT313 Enrollment Eligibility Report ===
Ana Cruz - Average: 87.67 - PASSING
Bea Santos - Average: 65.00 - PROBATION
Cid Ramos - Average: 94.67 - PASSING
Dex Alonzo - Average: 55.00 - PROBATION
Eli Tan - Average: 78.00 - PASSING
Class Average: 76.07
Passing: 3 / 5
Error Handling Test

To test the try/catch, temporarily change getEnrollees() so that it rejects:

const getEnrollees = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Registrar connection failed")), 1000);
  });

The program should report the error instead of crashing.

After testing, restore the original resolve(enrollees) implementation.