/**
 * তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে। 

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে absolute পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই ইনপুট এবং ৭ এর মধ্যে পার্থক্য। নাহলে তোমাকে return করতে হবে double of their absolute difference.Sample Input & Output:-

Input: 6
Output: -1

Input: -15
Output: 44

Input: 13
Output: 6
 */

function isLGSeven(number) {
  if (typeof number == "number") {
    if (number < 7) {
      return number - 7;
    } else if (number >= 7) {
      return number  * 2;
    }
  } else {
    return "Please valid Data";
  }
}
console.log(isLGSeven(7));
