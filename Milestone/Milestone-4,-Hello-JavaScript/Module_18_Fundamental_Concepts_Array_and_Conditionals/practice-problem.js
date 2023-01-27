
/**
 * Practice Problem 1
 * 
 * You are given an array
 * 
 * var  fruits = ['Apple', 'Banana', 'Orange'];
 * 
 * a) Find the index of 'Banana' and replace 'Banana' with 'Mango'
 * b) Remove 'Orange' and add 'Watermelon'
 */
var fruits = ["Apple", "Banana", "Orange"];

var findBanana = fruits.indexOf('Banana');
console.log(findBanana);

var replaceM = fruits.splice(1,fruits.indexOf('Banana'), 'Mango')
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits)





/**
 * Practice Problem - 2
 * 
 * You and your friends Tom, Jane, Peter and John got their final exam results. your total score is 85, Tom's total score is 66, Jane's total score is 95, Peter's total score is 56 and John's total score is 40. the grading chart is 
 *    80 or above A grade
 *    60 or above B grade
 *    50 or above C grade
 *    40 or above D grade
 *    39 or less => F grade
 * 
 * Write a program to find your and your friends grades using if-else      
 */
var Me = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

var marks = Me;
if (marks >= 80) {
   console.log('A Grade');
} else if (marks >= 60 && marks <= 79) {
   console.log('B grade');
} else if (marks >= 50 && marks <= 59 ) {
   console.log('C grade');
} else if (marks >= 40 && marks >= 49) {
   console.log('D grade');
} else {
   console.log('F grade');
}


/**
 * Practice Problem-3
 * 
 * 1. you are given three numbers 13, 79, and 45. write a program that will print the largest number using if-else
 * 
 * 2. you are given a triangle with the sides 9, 8, 9. write a program to check whether a triangle is isosceles or not using if-else
 * 
 *    Isosceles => two sides are equal
 */
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 == side3) {
   console.log('three side are equal');
} else if ((side1 == side2) ) {

}

const isIsosceles = (a, b, c) => {
  if (a === b || b === c || a === c) {
    console.log("The triangle is isosceles.");
  } else {
    console.log("The triangle is not isosceles.");
  }
};
isIsosceles(side1, side2, side3);

