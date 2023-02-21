// var , let , const
// break up with var

const numbers = [12, 34, 53, 345, 5];
let salary = 4560;
salary = 455;

// 2. default parameters
function calculateSalary(salary, tax, bonus) {
  const remaining = salary - salary * tax;
  const total = remaining + bonus;
  return total;
}

// 3. template string
const elementHtml = `
   <div>
      <h3> Name: </h3>
      <p> Address: </p>
      <p> Salary: ${calculateSalary(10000, 0, 0)} </p>
      <p> Others: ${numbers[2]} </p>
   </div>
`;

// 4. Arrow function
const doubleIt = (x) => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread
const ages = [11, 13, 15, 14, 34, 23];
const newAges = [...ages, 22, 44, 34];

// 6. destructuring
const { x, y, z, ...c } = {
  x: 45,
  y: 32,
  z: 55,
  name: "Sakib Al Hasan",
  salary: 450000,
};

const [a, b, gc, d, f] = [12, 23, 34, 54, 56];
