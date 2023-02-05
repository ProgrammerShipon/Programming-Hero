/**
    * John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program.

   Input:

   The first and the second lines of the input contain the strings.

   Output:

   Print the result in one line. 

 */

const sentance1 = "I am going to be";
const sentance2 = "an awesome web developer";

function stringCombine(str1, str2) {
  //write your code here
  //don't forget to write return
  return str1 + " " + str2;
}

console.log(stringCombine(sentance1, sentance2))
