// 1. JSON => stringify, parse

const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// 2. fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 2, 4, 2, 56, 66, 34];
numbers.forEach((number) => console.log(number));
numbers.map((num) => num * 2);

// for of on array like object
// loop on an for in on object

const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 2200, brand: "Iphone", color: "gold" },
  { name: "watch", price: 7000, brand: "casio", color: "yellow" },
  { name: "sungalass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = {
  name: "webcam",
  price: 600,
  brand: "Lal",
};

// copy product array and the add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter((p) => p.name !== "phone");
