const fish = {
  name: "king Hilsa",
  address: "Chandpur",
  color: "silver",
  phone: "017345786365",
  price: 4000,
};

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
// console.log(phone);
// console.log(color);
// console.log(price);

// Object Destructuring
const { name, address, color, phone, price } = fish;
// console.log(name);

const { age } = { name: "almas", age: 56, profession: "makeup artist" };
// console.log(age);

// Array Destructuring
const [first, ...another] = [34, 23, 54, 65, 34, 45];
console.log(another);
console.log(first, another);

const nayoks = ["sakib", "bappi", "raj"];
const [king, lost, notun] = nayoks;
// console.log(notun);

function getNames() {
  return ["Alim", "Halim"];
}

const [chacha, baba] = getNames();
// console.log(baba, chacha);
