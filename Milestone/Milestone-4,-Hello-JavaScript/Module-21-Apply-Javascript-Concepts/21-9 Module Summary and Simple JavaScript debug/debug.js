
function getFactorial(number) {
   let factorial = 1;
   for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
      console.log(i, factorial)
   }
   return factorial
}
const factorial = getFactorial(5);
console.log('factorial of 8 is : ' + factorial)
