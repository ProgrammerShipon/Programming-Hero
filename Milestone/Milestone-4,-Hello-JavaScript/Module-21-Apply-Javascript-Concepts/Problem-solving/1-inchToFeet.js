/**
 * Practice-Problem - 1
 *
 * The standard height of a volleyball player is 7 feet. jim wants to join the volleyball team so he decided to measure his height to see if he meets the standard. Calculate his height in feet
 *
 * To convert inch to feet:
 *          feet = inch / 12
 *
 * Input : The input line has the height in inch
 *
 * output : print the height in feet.
 */
function getFeetToInch(feetNumber) {
   return feetNumber * 12;
}
console.log(getFeetToInch(10));

/**
 * To convert feet to inch:
 *          inch = feet * 12
 *
 * Input : The input line has the inch in height
 *
 * output : print the feet in height
 */
function getInchToFeet(inchNumber) {
   let result = inchNumber / 12;
   result = result.toFixed(2)
   return result;
}
console.log(getInchToFeet(235));



