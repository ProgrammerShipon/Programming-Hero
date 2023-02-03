// 1 * 2 * 3 * 4 * 5 * 6 * 7

// 3! = 3*2*1
// 4! = 4*3*2*1

function multiplicationOfNumber(number) {
  let result = 1;
   for (let i = 1; i <= number; i++) {
     console.log(i)
    result *= i;
  }
  return result;
}
console.log(multiplicationOfNumber(10))