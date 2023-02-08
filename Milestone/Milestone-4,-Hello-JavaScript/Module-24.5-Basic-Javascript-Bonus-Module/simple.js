let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum = sum + i;
}
// console.log(sum)

let decre_sum = 0;
for (let i = 5; i >= 5; i--) {
  decre_sum += i;
}
// console.log(decre_sum);

/**
 * 5 + sumFc(i - 1)
 * 5 + sumFc(5 - 1)
 * 
 * 5 + sumFc(4)
 * 5 + 4 + sumFc(3)
 * 5 + 4 + 3 + sumFc(2)
 * 5 + 4 + 3 + 2 + sumFc(1)
 * 5 + 4 + 3 + 2 + 1 
 * = 15
 */

function sumFc(i) {
   console.log(i)

   if (i == 1) {
      return 1
   }

   return i + sumFc(i - 1);
}
console.log(sumFc(5));



