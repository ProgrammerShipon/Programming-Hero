/**
 *    Homework: - 1
 *  Write a function that will take 3 numbers will return the max number
 *  Write a function that will take 3 parameters and will return the min number
 *
 * first time do it using  if else
 * second time do it using math.min or math.max
 */

function MaxNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + " - is Max-Number";
  } else if (num2 > num1 && num2 > num3) {
    return num2 + " - is Max-Number";
  } else {
    return num3 + " - is Max-Number";
  }
}
console.log("Max-Number : " + MaxNumber(23, 34, 76));

function minimumNumber(num1, num2, num3) {
  return num1 <= num2 ? num1 <= num3 ? num1 : num3 : num2 <= num3 ? num2 : num3;
}

console.log("Minimum Number : " + minimumNumber(23, 34, 76));
