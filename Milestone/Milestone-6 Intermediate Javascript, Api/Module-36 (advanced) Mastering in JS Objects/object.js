// create object using object literals
const player = {};
player.name = "Small Nirob";
player.specialty = "batsman";
player.bat = function () {
  console.log("swing your bat");
};
// console.log(player);
// player.bat();

const student = {
  name: "Pandey",
  job: "khai andey",
  ball: function () {
    console.log("throw the ball");
  },
  salary: 10000,
};
// console.log(student);

// 2. object constructor
const person = new Object();
// console.log(person);

// 3. object create method
const items = Object.create(student);
// console.log(items);
// console.log(items.job);
// console.log(items.nam);

// 4. class
class Person {
  name = "abul";
  address = "sodr ghat";
  constructor(age) {
    this.age = age;
  }
}
const person1 = new Person(80);
// console.log(person1);

// function
function Car(model, price) {
  this.model = model;
  this.price = price;
}

const tesla = new Car("elon", 34000);
console.log(tesla);
