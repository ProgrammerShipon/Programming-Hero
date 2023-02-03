
function factorial(number) {
   let result = 1;
   for (let i = number; i >= 1; i--) {
      result *= i;
   }

   return result;
}
const number = 6;
const fact = factorial(number)
console.log('Factorial of : ', number , fact)


