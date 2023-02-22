/**
 *       Practice Problem - 1
 *  You have an odd array (array with odd number). [1, 3, 5, 7, 9]. Now convert this array into an even array (array with even numbers). [2, 3, 4, 5, 10]. Do this using for loop & array.map() method. Hints: odd one to any odd number and it will become an even number.
 */
const oddNumber = [1, 3, 5, 7, 9];

const even = oddNumber.map((number) => (number % 2 != 0 ? number + 1 : number));
// console.log(even);

/**
 *       Practice Problem - 2
 * You are given an array say: [33, 50, 79, 78, 90, 101, 30].
 * Now return/get all the elements which are divisible by 10 using array.filter() method
 */
const numbers = [33, 50, 79, 78, 90, 101, 30];

const divisible = numbers.find((number) => number % 10 == 0);
const divisibles = numbers.filter((number) => number % 10 == 0);
console.log(divisible, divisibles);

// const negativeNumber = [2, -5, 23, -54, 1, 65, -56];
// const negative = negativeNumber.filter((number) => number < 0);
// console.log(negative.length);

/**
 *       Practice Problem - 3
 * Now do the same task of question 2. But do this using array.find method. then compare the output of question 2 &question 3
 */
const divisibl = numbers.find((number) => number % 10 == 0);
// console.log(divisibl);
