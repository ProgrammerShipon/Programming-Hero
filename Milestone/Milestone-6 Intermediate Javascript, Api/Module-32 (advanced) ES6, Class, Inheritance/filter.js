const numbers = [
  12, 34, 67, 873, 465, 76, 3476, 3, 6, 2, 45, 6, 34, 875, 935, 23,
];
const bigNum = numbers.filter((num) => num > 20);
// console.log("bigNum ", bigNum);

const tiny = numbers.filter((number) => number < 10);
// console.log(tiny);

const even = numbers.filter((num) => num % 2 === 0);
// console.log(even);

const fives = numbers.find((num) => num % 5 === 0);
// console.log("fives find : ", fives);

const fivesAll = numbers.filter((num) => num % 5 === 0);
// console.log("fivesAll : ", fivesAll);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "mobile", price: 80000 },
  { id: 1, name: "watch", price: 34500 },
  { id: 1, name: "tablet", price: 60000 },
];
const expensive = products.filter((product) => product.price < 10000);
// console.log(expensive);

const cheap = products.find((product) => product.price < 40000);
console.log(cheap);
