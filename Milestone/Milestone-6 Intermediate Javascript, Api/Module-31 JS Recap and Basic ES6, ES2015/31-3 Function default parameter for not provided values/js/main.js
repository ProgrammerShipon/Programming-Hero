function add(first, second) {
  console.log(first, second);
  //   if (first === undefined && second === undefined) {
  //     first = 10;
  //     second = 10;
  //   }
  first = first || 15;
  second = second || 15;
  const total = first + second;
  return total;
}

const result = add(5);
console.log(result);

function addi(first = 10, second = 10) {
  const total = first + second;
  return total;
}
console.log(addi(10));

function fullName(first, last = "Bapari") {
  const name = first + " " + last;
}
const names = fullName("Shipon");
console.log(names);
