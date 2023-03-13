const numbers = [89, 34, 23, 75];
const student = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;

console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator
const newNumbers = [...numbers];

newNumbers.push(54);
newNumbers.push(58);

// create a new array from an older array and add an element

const currentNumber = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumber);
