/**
 * Practice-Problem - 6
 *
 * Write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. if a year is a leap year insert that year in a new array, return the new array and print the result .
 *
 *
 */

function findLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return year + " is Leap Year";
  } else {
    return year + " is Not Leap Year";
  }
}
console.log(findLeapYear(2354));
