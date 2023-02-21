const numbers = [2, 3, 5, 3, 6, 8];

function getDoubles(numbers) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

function doubleIt(number) {
  return number * 2;
}

console.log(getDoubles(numbers));

/**
 * 1. get an array
 * 2. for every elements of the array do something
 * 3. store the result in an array
 * 4. return the result array
 */
const makeDouble = numbers.map(doubleIt);
console.log("make double ", makeDouble);

const makeDoubleDirect = numbers.map((num) => num * 2);
console.log("makeDoubleDirect : ", makeDoubleDirect);

const makeDouble2 = numbers.map((x) => x * 2);
console.log("makeDouble2 ", makeDouble2);

const fiveTimes = [1, 2, 3, 4, 5].map((x) => x * 5);
console.log("fiveTimes ", fiveTimes);
