// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 37;
console.log(money);

const bird = "jaan pakhi";
const message = bird + " potas potas";
console.log(message);

const number = [12, 89, 65, 45];
//  reassign is not allowed
// numbers = [77, 66, 55, 33, 99]
number.push(123);
number[0] = 88;
console.log(number);

const student = {
  name: "mofiz",
  address: "Rongpur",
};

// student = { name: 'mofazzol}
student.name = "Mofazzol";

let sum = 0;
for (let i = 0; i < number.length; i++) {
  var num = number[i];
  sum = sum + number;
}
console.log(num);
