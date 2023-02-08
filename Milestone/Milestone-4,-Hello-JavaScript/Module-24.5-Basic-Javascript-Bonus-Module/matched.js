const numbers = [34, 34, 45, 45, 34, 23];
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

// for (const number of numbers) {
//    console.log(number)
// }

const products = [
  { id: 1, name: "Xiami Phone One night", price: 19000 },
  { id: 2, name: "Iphone", price: 19000 },
  { id: 3, name: "mac book air", price: 119000 },
  { id: 4, name: "lenovo yoga laptop 2025", price: 19000 },
  { id: 5, name: "dell inspiron laptop", price: 19000 },
  { id: 6, name: "Samsung Phone Note 7", price: 19000 },
  { id: 7, name: "Nokia old age phone gone", price: 19000 },
  { id: 8, name: "Phone one", price: 19000 },
  { id: 9, name: "M1 chip not cheap laptop", price: 19000 },
];

// for (let product of products) {
//    console.log(product)
// }

function matchedProducts(products, search) {
  const matched = [];

  for (let product of products) {
     if (product.name.toLowerCase().includes(search.toLowerCase())) {
       matched.push(product)
    }
   }
   return (matched)
}
console.log(matchedProducts(products, "laptop"));
