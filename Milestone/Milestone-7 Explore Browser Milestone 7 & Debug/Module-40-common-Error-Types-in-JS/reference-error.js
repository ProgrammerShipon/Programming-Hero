const x = "Pori";
const y = "Moni";
// console.log(z);  // ReferenceError: z is not defined

// console.log(names); // ReferenceError: Cannot access 'names' before initialization
const names = "Ananate Jalil";

// console.log(nam); // undefined
var nam = "hlw";

// console.log(add(3, 4));
function add(n1, n2) {
  return n1 + n2;
}

// console.log(add2(4, 5)); // ReferenceError: Cannot access 'add2' before initialization
const add2 = (n2, n1) => n2 + n1;

function doSomething() {
  const sum = 43;
  var sums = 43;
}
// console.log(sum); // ReferenceError: sum is not defined
// console.log(sums); // ReferenceError: sums is not defined
