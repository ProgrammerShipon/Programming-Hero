/**
 * তোমাকে একটা function দেওয়া হবে called evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। 

   এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
 */

// The length of your array index is even or odd
function evenOdd(str) {
  // type check
  if (typeof str == "string") {
    let lengthStr = str.length;
    if (lengthStr % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Please Valid Data";
  }
}

console.log(evenOdd("Programmer"));
