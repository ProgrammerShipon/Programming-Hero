const person = "Adam Sandler";
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine =
  "First line text \n" +
  "second line of text \n" +
  "third line of text \n" +
  "Fourth line of string";
// console.log(multiLine);

const newMultiLine = `First line of text
   Second Line of text
   third line of string 
   fourth line of code
`;
// console.log(newMultiLine)

const a = 20;
const b = 30;
const summary = "sum of " + " and " + b + " is : " + (a + b);
console.log(summary);
const newSummary = `sum of ${a} and ${b} is : ${a + b}`;
console.log(newSummary);
