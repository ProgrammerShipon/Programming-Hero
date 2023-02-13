/**
Problem 5: Convert your gems into diamond

তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]

এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

Sample Input & Output:-

Input: 1, 1, 1
Output: 96

Input: 20, 200, 50
Output: 6970

Input: 100, 5, 1
Output: 303

 */

// three friends total gems and
// If total games are more than 2000 then 2000 is subtracted
function gemsToDiamond(friend1, friend2, friend3) {
  // typeof and parameter check
  if (
    typeof friend1 === "number" &&
    typeof friend2 === "number" &&
    typeof friend3 === "number"
  ) {
    const friend1Diamond = 21 * friend1;
    const friend2Diamond = 32 * friend2;
    const friend3Diamond = 43 * friend3;

    let totalDiamonds = friend1Diamond + friend2Diamond + friend3Diamond;

    if (totalDiamonds > 1000 * 2) {
      return totalDiamonds - 2000;
    }

    return totalDiamonds;
  } else {
    return "Please valid Data";
  }
}

console.log(gemsToDiamond(100, 5, 1));
