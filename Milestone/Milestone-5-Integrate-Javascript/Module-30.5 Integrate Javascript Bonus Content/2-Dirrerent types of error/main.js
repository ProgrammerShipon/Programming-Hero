// not in JS that frequently: range error
const numbers = [3, 4, 5, 6, 8];
console.log(numbers[25]);

// you should not do it (most of the time)
numbers.length = 2;
console.log(numbers);
console.log(numbers.length);

// reference error
// console.log(money)
const money = 80;

// syntax error
// for (let i = 0; i < 5 i) {}

// if(numbers.length > 2){} else

let student = { address: "ghum" };
console.log(student.address.city);
