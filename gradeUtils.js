export const computeAverage = (prelim, midterm, final) =>
  (prelim + midterm + final) / 3;

export default function isPassing(average) {
  return average >= 75;
}