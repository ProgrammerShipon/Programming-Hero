// truthy value =>  'almas', 5, true, {}, []
// falsy value => '', 0, false, null, undefined

let myVar = 5;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {
}

const money = 80;
let food;
if (money > 100) {
  food = "biryani";
} else {
  food = "Cha biscuit";
}
console.log(food);

// ternary
let food1 = money > 100 ? "Birayani" : "Cha Biscuit";
console.log(food1);

let drink = money > 100 && myVar ? "coke" : "filter water";
console.log(drink);

const num1 = 52;
console.log(num1);

const numStr = num1 + "";
console.log(numStr);

// string to number
const input = "560";
console.log(input);

const inputNum = +input;
console.log(inputNum);

let isActive = true;
const showUser = () => console.log("display User");
const hideUser = () => console.log("hide User");
isActive ? showUser() : hideUser();

// use && if the side is true then right side will be executed
isActive && showUser;
//  use || if  the left side is  flase then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;
