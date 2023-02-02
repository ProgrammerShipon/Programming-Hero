/**
 * Home Work
 *
 * write a function to get the lowest number in an array
 */

const someNumbers = [23, 54, 23, 243, 45, 56, 75, 56, 43, 4, 345, 34, 1, 23, 45, 62, 54, 5, 643, 4, 454, 523, 3, 45, 6, 675, 4, 6, 45, 23, 452, 6];

function getLowest(numbers) {
   let start = numbers[0];

   for (let i = 0; i < numbers.length; i++) {
      if (start > numbers[i]) start = numbers[i]
   }

   return start;
}

console.log(getLowest(someNumbers));




