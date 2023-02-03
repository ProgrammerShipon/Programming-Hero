/**
 * --==== Problem solving 1 =====--
 *
 *   Write a function called foo() which prints "foo" and a function called bar() which prints "bar". call function bar() in the foo() function after printing . what will be the output ? Now call the foo() to see the output
 *
 */

function bar() {
  console.log("bar");
}

function foo() {
  bar();
  console.log("foo");
}
foo();

/**
 * --==== Problem solving 2 =====--
 *
 *   Write a function called make_avg() which will take an three integers and return the average of those values.
 */

function make_avg_three(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
var avg = make_avg_three(23, 45, 43);
console.log(avg);

/**
 * --==== Problem solving 3 =====--
 *
 *   Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values
 */
var arrs = [34, 545, 656, 674, 434, 33, 567, 8785, 2];

function make_avg(arrays) {
  const arrLength = arrays.length;
  var total = 0;
  for (let i = 0; i < arrLength; i++) {
    total += arrays[i];
  }
  const avg = total / arrLength;
  return avg;
}
var myAvg = make_avg(arrs);
console.log(myAvg);

function make_avgs(arrays, size) {
  var total = 0;
  for (let i = 0; i < size; i++) {
    total += arrays[i];
  }
  const avg = total / size;
  return avg;
}
console.log(make_avgs([23, 34, 45], 3));

/**
 * --==== Problem solving 4 =====--
 *
 *   Write a function called odd_even() which takes an integer value and tells whether this value is even is even or odd . you need to do it in 4 ways
 *   * Has return + Has parameter
 *   * No return + Has parameter
 */
function odd_even(num) {
  if (num % 2 == 0) {
    console.log(num, " Even Number");
  } else {
    console.log(num, " Is Odd Number");
  }
}
odd_even(50);

/**
 * --==== Problem solving 5 =====--
 *
 *   you are in a hurry to go to your school on time . But when you are crossing the road , the traffic signal is red coloured. in this situation is, if you try to cross the road you may be in danger . if you notice a yellow coloured traffic signal, you should stop. if you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. its value can be green, yellow or red & we will get different activities as output depending on the variable . so hurry up.
 *  */

// --======== 1 way
var signal = "yellow";

if (signal == "red") {
  console.log("the road you may be in danger");
} else if (signal == "yellow") {
  console.log("you should stop");
} else if (signal == "green") {
  console.log("you should cross the road");
} else {
  console.log(" is Not a road !");
}

// --======== 2 way

switch (signal) {
  case "red":
    console.log("the road you may be in danger");
    break;

  case "yellow":
    console.log("you should stop");
    break;

  case "green":
    console.log("you should cross the road");
    break;

  default:
    console.log(" is Not a road signal!");
    break;
}

// --======== 3 way

var colors = ["red", "green", "blue"];

function singnals(colors) {
  console.log(colors);
  for (let color in colors) {
    var col = colors[color];

    if (col == "green") {
      console.log("you should cross the road");
    }
  }
}
singnals(colors)

// --======== 4 way

colors.forEach((color) => {
  if (color == "red") {
    console.log("the road you may be in danger");
  }
});
