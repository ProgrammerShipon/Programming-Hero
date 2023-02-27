const numbers = [12, 5, 2343, 543, 2];
// for (const number of numbers) {
//   console.log(number);
// }

const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};
// for (const key of bottle) {
//   console.log(key);
// }

const keys = Object.keys(bottle); // only keys or name
console.log(keys);
for (const key of keys) {
  console.log(key, bottle[key]);
}
/**
 *    3 ways to read object properties
 *  bottle.color
 *  bottle['color']
 *  bottle[key ]
 */

for (const key in bottle) {
  const value = bottle[key];
  console.log(value);
}

// Advanced
const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
