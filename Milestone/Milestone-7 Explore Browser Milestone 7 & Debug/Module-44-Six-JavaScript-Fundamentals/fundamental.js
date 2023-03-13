/**
 *
 * 1. How to declare a variable using let and const
 */
const fatherName = "Halim";
let season = "rainy";
season = "winter";

/**
 *  2. conditions
 *    6 basic conditions: <, >, ===, !==, <=, >=
 *    multiple conditions: &&, ||
 *
 */

if (fatherName === "Halim" || season === "rainy") {
  console.log(true, "fatherName or season");
} else if (fatherName === "halim") {
  console.log(true, "else if");
} else {
  console.log("else");
}

// 3. array declare
//    index
//    length, push
const numbers = [89, 34, 23, 75];
numbers[0] = 56;

// for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
console.log(multiply(4, 5));

//  6. Object
// 3 ways to access property by name
const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const myVariable = "age";

console.log(student.age); // direct by property
console.log(student["age"]); //  access via property name string
console.log(student[myVariable]); // access via property name in a variable
