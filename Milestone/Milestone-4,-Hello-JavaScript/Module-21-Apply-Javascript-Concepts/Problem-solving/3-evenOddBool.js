/**
 * Practice-Problem - 3
 *
 * Peter's school teacher asked him to write a program that would return true if a number is even and false if a number is odd . Help Peter Write the program.
 *
 *
 * Input : The first and second input lines contain the numbers.
 *
 * output : print true if the number is an even number and false if the number is an odd number
 */

function getNumberBoolean(values) {
   console.log(values)
   if (values % 2 == 0) {
      return  true;
   } else {
      return  false;
   }
}
console.log('isEven : ', getNumberBoolean(586243));

