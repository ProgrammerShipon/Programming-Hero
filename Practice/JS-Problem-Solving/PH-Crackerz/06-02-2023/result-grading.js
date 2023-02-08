/**
 * You received your final exam results. Write a function that will take your mark as an input and return you a grade, as shown in the sample input and output below.

The grading chart is 

80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

 */

function findGrade(marks) {
  //write your code here
  let result;

  if (marks <= 100 && marks >= 80) {
    result = "A";
  } else if (marks >= 60 && marks <= 79) {
    result = "B";
  } else if (marks >= 50 && marks <= 59) {
    result = "C";
  } else if (marks >= 40 && marks <= 49) {
    result = "D";
  } else if (marks <= 39 && marks >= 0) {
    result = "F";
  } else {
    result = "unnecessary number";
  }

  return result;
  //don't forget to write return
}

console.log(findGrade(101));
