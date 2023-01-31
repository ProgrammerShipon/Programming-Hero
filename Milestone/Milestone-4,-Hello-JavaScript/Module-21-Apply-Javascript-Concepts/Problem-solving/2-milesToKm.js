/**
 * Practice-Problem - 2
 *
 * John is a web developer, and he cycles to work. He knows the distance between his house and his office in miles. John wants to measure the distance in kilometers . Calculate the distance in km
 *
 * To convert miles to km:
 *          km = miles * 1.60934
 *
 * Input : The input line has the distance in miles
 *
 * output : print the distance in km
 */

function getMilesToKm(kmNumber) {
  let result = kmNumber * 1.6093;
  result = result.toFixed(2);
  return result;
}
console.log(getMilesToKm(50));


function getKmToMiles(mileNumber) {
   let result = mileNumber / 1.60934;
   result = result.toFixed(2)
   return result
}
console.log(getKmToMiles(80.47));