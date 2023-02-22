/**
 *       Practice Problem - 1
 *  You have an odd array (array with odd number). [1, 3, 5, 7, 9]. Now convert this array into an even array (array with even numbers). [2, 3, 4, 5, 10]. Do this using for loop & array.map() method. Hints: odd one to any odd number and it will become an even number.
 */
const oddNumber = [1, 3, 5, 7, 9];

const even = oddNumber.map((number) => (number % 2 != 0 ? number + 1 : number));
console.log(even);
