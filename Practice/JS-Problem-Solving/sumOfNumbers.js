// 1 + 2 + 3 + 4 + 5 + 6 + 7

function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

console.log("your numbers sum : " + sumOfNumbers(10));
