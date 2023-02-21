const numbers = [12, 23, 3456, 34, 45];
// console.log("main numbers : ", numbers);

const half = numbers.map((n) => n / 2);
// console.log("half : ", half);

const thirds = numbers.map((x) => x / 3);
// console.log("thirds : ", thirds);

const friends = ["Tom Hanks", "Tom Cruise", "Tom Brady", "Tom Solaiman"];
const firstLetters = friends.map((friend) => friend[0]);
console.log(firstLetters);

const nameLengths = friends.map((friend) => friend.length);
console.log(nameLengths);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 1, name: "mobile", price: 80000 },
  { id: 1, name: "watch", price: 34500 },
  { id: 1, name: "tablet", price: 60000 },
];
// const items = products.map((product) => console.log(product.name));
const items = products.map((product) => product.name);
console.log(items);
