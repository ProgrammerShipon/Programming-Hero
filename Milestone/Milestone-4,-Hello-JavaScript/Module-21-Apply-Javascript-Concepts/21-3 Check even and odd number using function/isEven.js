console.clear();

console.log(4 / 2);
console.log(98 / 2);
console.log(144 / 2);
console.log(1286 / 2);

console.log("---====== 1 =======---");

console.log(7 / 2);
console.log(83 / 2);
console.log(145 / 2);
console.log(1287 / 2);

console.log("---====== 2 =======---");

console.log(7 % 2);
console.log(83 % 2);
console.log(145 % 2);
console.log(1287 % 2);

console.log("---======= 3 ======---");

console.log(8 % 2);
console.log(84 % 2);
console.log(148 % 2);
console.log(1282 % 2);

console.log("---======= Function ======---");

function isEvent(number) {
  const remainder = number % 2;
  console.log(remainder);
}
isEvent(333);

function isEventOdd(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    console.log(number, " Number is Event");
  } else {
    console.log(number, " Number is odd");
  }
}
isEventOdd(333);
isEventOdd(85647397948578)



function isBolEventOdd(number) {
  const remainder = number % 2;
  if (remainder === 0) {
     return true;
  } else {
     return false;
  }
}

const boolan = isBolEventOdd(345)
console.log(boolan)
