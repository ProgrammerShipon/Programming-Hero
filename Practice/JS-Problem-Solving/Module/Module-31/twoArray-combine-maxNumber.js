/**
 *       Practice Problem - 6
 *  Write  an arrow function where it will it will do the following
 *   a) It will take two array inputs
 *   b) Combine the two arrays and assign them in a new array
 *   c) Find the maximum number from the new array and return the result
 *
 *  print the result.
 */

const twoArrayMaxNumber = (array1, array2) =>
  Math.max(...[...array1, ...array2]);

const arr = [2, 43, 5, 2, 445, 56, 9];
const arr2 = [2, 45, 56, 73, 867, 78, 97, 86, 4];

console.log(twoArrayMaxNumber(arr, arr2));
