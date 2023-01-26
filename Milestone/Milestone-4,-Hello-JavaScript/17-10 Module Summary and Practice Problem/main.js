/**
 * Practice Problem - 1
 *
 * Harry's mom gave him money and asked him to buy some oranges and apples . write a program to help harry calculate how much money the shopkeeper will return
 *
 * Input
 * The first line of the input is the taka Harry's mom gave him.
 * The second line is the cost of 1 kg of oranges and 1kg of apples.
 *
 * Output
 * Print the Result
 */
var momGaveTaka = 1000;
var orangeApples = 700;
var result = momGaveTaka - orangeApples;
console.log(result);


//=====================================================================

/**
 * Practice Problem - 2
 *
 * Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla of a Student
 *
 * Input :
 * the first line of the input is the marks of the five subjects mentioned above, respectively.
 *
 * output:
 * print the result in 2 decimal places
 */
var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;
var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
var markAvg = totalMarks / 5;
markAvg = markAvg.toFixed(2);
console.log(markAvg)



//==================================================================

/**
 * Practice Problem - 3
 * 
 * John's teacher gave him two variables. Each variable contains a string. John's teache asked him to Combine these two Strings and print them in one line . Help John write the program
 * 
 * input : 
 * the first and the second lines of the input contain the strings.
 * 
 * output : 
 * Print the result in one line. 
 */

var firstLine = 'I am going to be ';
var secondLine = ' an awesome web developer';
var contain = firstLine + secondLine;
console.log(contain);


//======================================================


/**
 * Practice Problem - 4
 * 
 * Sarah's mother is teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5 . Help Sarah write the program .
 * 
 * Input : 
 * The first line of the input container the number .
 * 
 * Output : 
 * print the remainder
 */
var num = 199;
var dividedNum = 5;
var remainder = num % dividedNum;
console.log(remainder);

console.log(17 % 5);