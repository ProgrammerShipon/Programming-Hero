/**
 * This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

Input:
The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got) .

Output:
Print the name of the topper. 
 */

const jim = 840;
const dela = 94;
const chinku = 704;

function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
  //Write your code here
  //Don't forget to return

  if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
    return "Jim";
  } else if (marksOfDela > marksOfChinku) {
    return "Dela";
  } else {
    return "Chinku";
  }
}

console.log(JimOrDelaOrChinku(jim, dela, chinku));
