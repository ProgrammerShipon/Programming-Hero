// Removes elements from an array
// and, if necessary , inserts new elements in their place
// returning the deleted elements
// will change the original array

const friends = [12, 23, 34, 45, 56, 34, 543, 34, 23, 54];
console.log(friends);

const partial = friends.splice(2, 5);
console.log("splice : ", partial);

const partialReplace = friends.splice(2, 5, 555, 666, 777, 888, 999);
console.log(partialReplace);

console.log("Original Array Name  : ", friends);
