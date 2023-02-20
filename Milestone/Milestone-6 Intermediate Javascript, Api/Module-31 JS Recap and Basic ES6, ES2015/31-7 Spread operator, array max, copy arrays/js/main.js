const max = Math.max(12, 43, 23, 54, 56, 653, 23, 543);
console.log(max);

const numbers = [12, 345, 634, 654, 76, 980];
const largest = Math.max(...numbers);
console.log(...numbers);
console.log(largest);



const number2 = [...numbers];
numbers.push(55);
number2.push(345);

console.log(numbers);
console.log(number2);


const number3 = [...numbers]
const number4 = [23423, ...numbers, 534]


