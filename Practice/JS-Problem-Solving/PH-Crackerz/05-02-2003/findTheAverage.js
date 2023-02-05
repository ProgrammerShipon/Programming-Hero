/**
 * Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. 

Input:

The input parameter will be an array of integers, where each integer represents the mark of a subject given above.

Output:

Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.
 */

const marks = [75.25, 65, 80, 35.45, 99.5];
function average(arrOfMarks) {

  let totalMarks = 0;

  for (let i = 0; i < arrOfMarks.length; i++) {
   totalMarks += arrOfMarks[i]
  }

  let avg = totalMarks / arrOfMarks.length;
  avg = parseFloat(avg.toFixed(2))

  return avg;
}

console.log(average(marks))
