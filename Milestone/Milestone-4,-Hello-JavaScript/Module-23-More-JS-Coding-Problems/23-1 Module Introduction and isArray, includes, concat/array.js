const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 213, class: 11, names: "agun" };
const friends = [12, 23, 34, 45, 56, 76, 87, 89];
function add(num1, num2) {
  return num1 + num2;
}

// Check Typeof
console.log(typeof country); // string
console.log(typeof age); // Number
console.log(typeof isIndependent); // boolean
console.log(typeof student); // object
console.log(Array.isArray(friends)); // true
console.log(typeof add); // function

console.log(" -=======-=================-==============--");

console.log(friends.includes(19)); // false
console.log(friends.includes(89)); // true

if (friends.indexOf(252) !== -1) {
}

console.log(" -=======-=================-==============--");

// Concat :
console.log(friends)
const newFriendsAge = [12, 13, 11, 23, 45];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends)