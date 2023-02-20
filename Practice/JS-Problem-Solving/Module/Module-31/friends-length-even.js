/**
 *       Practice Problem - 4
 *  Write an arrow function where it will do the following :
 *  a) It will take an array where the array elements will be the name of your friends
 *  b) Check if the length of each element is even, push elements with even length to a new array and return the result
 *
 *  print the result
 */

const evenFriends = (arr) => {
  let evenArr = [];

  for (const friend of arr) {
    const lengths = friend.length;
    if (lengths % 2 == 0) {
      console.log(friend);
      evenArr.push(friend);
    }
  }

  return evenArr;
};

const friends = [
  "Billal",
  "Noyon",
  "Amin",
  "Nannu",
  "Bokul",
  "Kajem",
  "Shipon",
];
const evenFriend = evenFriends(friends);
console.log(evenFriend);
