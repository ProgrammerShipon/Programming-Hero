const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = num1 - num2;
// console.log("gap  : ", gap);

// if (gap < 5) {
//   console.log("you guys can be friends");
// } else {
//   console.log("you guys stay apart");
// }

// -----==============================------

console.log("Math.round(2.49999)  : ", Math.round(2.49999));
console.log("Math.round(2.5)  : ", Math.round(2.5));
console.log("Math.round(2.5999)  : ", Math.round(2.5999));

console.log("Math.ceil(2.00001)  : ", Math.ceil(2.00001));
console.log("Math.floor(2.9999)  : ", Math.floor(2.9999));

console.log("Math.floor(2.5999)  : ", Math.floor(2.5999));

//-----=======================================-----
// Random
console.log("Math.random() : ", Math.random());
console.log("Math.random() : ", Math.round(Math.random() * 100));

for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
