function isLeapYear(year) {
  const remainder = year % 4;

  if (remainder === 0) {
    console.log("Your year is leap year", year);
  } else {
    console.log("Your year is not a leap year", year);
  }
}
isLeapYear(1989);

function isLeapYearRe(year) {
  const remainder = year % 4;

  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}
const isMyLeapYear = isLeapYearRe(1989);
console.log(isMyLeapYear);

//  Practice
function isLeapYearPrac(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
console.log("isLeapYearPrac ", isLeapYearPrac(2094));
