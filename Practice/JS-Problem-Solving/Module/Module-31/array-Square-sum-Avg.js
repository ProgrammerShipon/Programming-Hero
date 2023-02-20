/**
 *       Practice Problem - 5
 *  Write an arrow function where it will do the following :
 *   a ) Square each array element
 *   b) Calculate the sum of the squared elements
 *   c) Return the average of the sum of the squared elements
 *
 * print the result
 */

const SquareAvg = (numberArr) => {
  let sum = 0;
  for (const num of numberArr) {
    sum += Math.pow(num, 2);
  }
  return sum / numberArr.length;
};
const numbers = [5, 5, 3, 4, 5];
console.log(SquareAvg(numbers));
