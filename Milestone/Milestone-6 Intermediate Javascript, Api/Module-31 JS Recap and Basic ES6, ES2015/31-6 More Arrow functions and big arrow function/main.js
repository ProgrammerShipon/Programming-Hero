const add = (first, second) => first + second;
const getFullName = (first, last) => first + " " + last;
const multiply = (a, b) => a * b;

const result = multiply(5, 3);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow function
const getPie = () => 3.14;

// on parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiverTimes = (num) => num * 5;

// multi line arrow function
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const multiplyResult = firstSum * secondSum;
  const result = multiplyResult / 2;
  return result;
};
