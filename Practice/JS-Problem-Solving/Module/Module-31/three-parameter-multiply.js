/**
 *       Practice Problem - 1
 *  Write an arrow function that will take 3 parameters, will multiply  the parameters and will return result
 *
 *  * Arrow Function *
 */

// Arrow Function
const multiplyA = (num1, num2, num3) => num1 * num2 * num3;
console.log(`Arrow Function :  ${multiplyA(2, 3, 4)}`);

// Function declaration
function multiplyD(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(`Function Declaration : ${multiplyD(2, 3, 4)}`);
