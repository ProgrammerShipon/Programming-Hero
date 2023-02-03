const totalCost = [
  { name: "Dano Milk", price: 500 },
  { name: "Taaza Tea", price: 200 },
  { name: "Fresh Sugar", price: 300 },
];
// Output: 1000

// Case 2: totalCost([{ name: "Samsung M33", price: 10000 },{ name: "Samsung Charger", price: 500},{ name: "Haveit Speakers", price:2500}])
// Output: 13000

const totalCostFc = (products) => {
  let totalPrice = 0;
  for (let product of products) {
    totalPrice += product.price;
  }
  return totalPrice;
};

const total = totalCostFc(totalCost);
console.log(total)