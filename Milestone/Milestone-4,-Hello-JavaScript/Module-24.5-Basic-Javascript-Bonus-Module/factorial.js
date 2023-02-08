// let factorial = 1;
// for (let i = 5; i >= 1; i--) {
//    factorial *= i
// }
// console.log(factorial)

/**
 * 5 * sumFc(i * 1)
 * 5 * sumFc(5 - 1)
 *
 * 5! = 5 * sumFc(4)
 * 4! = 5 * 4 * sumFc(3)
 * 3! = 5 * 4 * 3 * sumFc(2)
 * 2! = 5 * 4 * 3 * 2 * sumFc(1)
 * 1! = 5 * 4 * 3 * 2 * 1
 */

function sumFc(i) {
  console.log(i);

  if (i == 1) {
    return 1;
  }

  return i + sumFc(i - 1);
}
console.log(sumFc(5));
