const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 2200, brand: "Iphone", color: "gold" },
  { name: "watch", price: 7000, brand: "casio", color: "yellow" },
  { name: "sungalass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const brands = products.map((product) => product.brand);
// console.log(brands);
const prices = products.map((product) => product.price);
// console.log(prices);

// products.forEach((product) => console.log(product));
// products.forEach((product) => console.log(product.name));
// products.forEach((product) => console.log(product.color));
// products.forEach((product) => console.log(product.price));

// 3. filter
const cheap = products.filter((product) => product.price <= 500);
// console.log(cheap);

const specificName = products.filter((p) => p.name.includes("n"));
console.log(specificName);

const special = products.find((p) => p.name.includes("s"));
