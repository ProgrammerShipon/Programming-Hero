/**
Problem 3: Is Less or Greater than seven

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।  

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।

Input : 6
Output: -1

Input: -15
Output: -22

Input: 15
Output: 30
 */

// it will take a number as input
function isLGSeven(number) {
  // type check
  if (typeof number == "number") {
    if (number < 7) {
      return number - 7;
    } else if (number >= 7) {
      return number  * 2;
    }
  } else {
    return "Please Valid Data";
  }
}
console.log(isLGSeven(15));
