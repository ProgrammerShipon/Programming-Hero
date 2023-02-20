/**
 *       Practice Problem - 3
 *  Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter . Add these two parameters and return the result
 */

const parameter = (one, two = 0) => one + two;

console.log(parameter(5));
