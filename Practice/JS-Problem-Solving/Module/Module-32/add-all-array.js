/**
 *       Practice Problem - 4
 *  You have an array [1, 9, 17, 22]. add the all elements of this array and give out put. Do this using for loop & array.reduce() method
 */

const arr = [1, 9, 17, 22];

const add = arr.reduce((previous, current) => previous + current);

console.log(add);
