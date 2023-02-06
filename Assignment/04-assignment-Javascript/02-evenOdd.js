/**
 * তোমাকে একটা function দেওয়া হবে called evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। 

   এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।
 */

function evenOdd(str) {
  if (typeof str == 'string') {
    let lengthStr = str.length;
    if (lengthStr % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Please valid Data";
  }
}

console.log(evenOdd("Phero"));
