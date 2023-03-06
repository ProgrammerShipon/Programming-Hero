function isBigger(num) {
  if (num > 5) {
    return true;
  } else {
    return false;
  }
}
// } // SyntaxError: Unexpected token '}'

const result = isBigger(34);
console.log(result);

const sum = (a, b) => a + b; // SyntaxError: Missing initialize in const declaration - parameter ()
const res = sum(5, 6);
console.log(res);

const musk = {
  name: "elon",
  // age: 45  // SyntaxError: Unexpected identifier
  age: 45,
  job: "tesla",
};

// const numbers = [3, 34, 45, 23, 43, 23, 53434, 4 2, 3,] // SyntaxError: Unexpected number (comma )

// for (let i = 0; i < 10 i++) {  // SyntaxError: Unexpected identifier - ;
for (let i = 0; i < 10; i++) {
  // const n = number[i  // SyntaxError: Unexpected token '}'
  const n = number[i];
}

// if (numbers.length > 5) && (numbers[0] === 5) {  // SyntaxError: Unexpected token '&&'
if (numbers.length > 5 && numbers[0] === 5) {
}
