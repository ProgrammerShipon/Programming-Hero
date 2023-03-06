/**
 * 8 ways to get undefine
 *    1. variable that is not initialized will give undefined
 *    2. function with no return
 *    3. parameter that is not passed will be undefined
 *    4. if return has nothing on the right side will return undefined
 *    5. property that doesn't exists on an object will give you undefined
 *    6. accessing array elements outside of the index range
 *    7. deleting an element inside an array
 *    8. set a value directly to undefined
 */

// 1.
let first;
console.log(first);

// 2.
function second(a, b) {
  const total = a + b;
}
console.log(second(4, 5));

// 3.
function third(a, b, c, d) {
  console.log(a, b, c, d);
}
third(23, 4);

// 4.
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
console.log(noNegative(3, -1));

// 5.
const fifth = { id: 2, name: "ponchom", age: 34 };
console.log(fifth.id, fifth.address);

// 6. , 7.
const sixth = [3, 4, 63, 6, 4, 6];
delete sixth[1];
console.log(sixth[1], sixth[4], sixth[3], sixth[10]);

// 8.
const eighth = undefined;
const ninth = null;
const data = { results: [], updated: null };
console.log(typeof null);
