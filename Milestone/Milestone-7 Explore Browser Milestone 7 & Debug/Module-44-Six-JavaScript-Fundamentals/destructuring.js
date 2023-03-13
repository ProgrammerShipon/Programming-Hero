// 1. array destructuring
const numbers = [42, 54];

// const x = number[0]
// const y = number[1]

const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [m, n] = boxify(20, 54);
console.log(m, n);

const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const [firstMovi, secondMovi] = student.movies;
console.log(firstMovi, secondMovi);

// Object destructuring
const { name, age } = { name: "alu", age: 14 };
const { id, salary } = { id: 12, name: "alu", salary: 3452, age: 14 };

const employee = {
  ide: "VS Code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "Dhalarchar",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

const { brand } = employee?.specification?.watch;
console.log(brand);
