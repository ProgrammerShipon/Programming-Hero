/**
 * Q.  Write a function solution that takes a string parameter and returns the word in reverse order. In this task, you are given an input string and the task is to reverse the input string.
 *
 * For Example,
 * Input: str = "GeeksforGeeks"
 * Output: "skeeGrofskeeG"
 * Input: str = "Hello"
 * Output: "olleH"
 */

const reverseMaker = (word) => {
  let input = word;
  input = input.split("");
  input = input.reverse();
  input = input.join("");
  return input;
};
const hlw = "awesome";
const fc = reverseMaker(hlw);
console.log(fc);

// Same Work
const reverseMakerShot = word => {
   return word.split('').reverse().join('')
}

