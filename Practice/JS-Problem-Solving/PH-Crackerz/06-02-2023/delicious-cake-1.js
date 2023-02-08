/**
 * Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his class. She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get this tasty cake." Can you find out who will get this cake?



Input:

The input line has two values, m (The marks Jim has got) and n (The marks Dela has got) .



Output:

Print the name of the topper. 


 */

const jim = 84.00201;
const dela = 84.2000001;

function JimOrDela(marksOfJim, marksOfDela) {
  //Write your code here
  //Must follow lowercase and uppercase
  //Don't forget to return
  //
  if (marksOfJim < marksOfDela) {
    return "Dela";
  } else {
    return "Jim";
  }
}
JimOrDela(jim, dela);
