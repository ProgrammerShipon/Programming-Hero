/*
const first = 2;
const second = 2;
if (first === second) {
  console.log("they are some");
} else {
  console.log("different");
}
// output: different
*/

/*
const first = {};
const second = {};
if (first === second) {
  console.log("they are some");
} else {
  console.log("different");
}
// output: different
*/

/*
const first = { a: 2 };
const second = { a: 2 };
if (first === second) {
  console.log("they are some");
} else {
  console.log("different");
}
// output: different
*/

/*
// do not use this method to compare object or array
const first = { a: 2 };
const second = { a: 2 };
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);
if (firstString === secondString) {
  console.log("Same");
} else {
  console.log("Different");
}
*/

const first = { a: 2, b: 3, d: 5, f: 30 };
const second = { a: 2, c: 5, b: 2 };
function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(compareObject(first, second));
