/**
 * Practice-Problem - 4
 *
 * Write a function findOddSum() that will take the array [5,6,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers
 *
 */

function getSum(arrayNumbers) {
  let sum = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    sum += arrayNumbers[i];
  }
  return sum;
}

function getEvenNumber(arrayNumbers) {
  let evenArray = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 == 0) {
      evenArray.push(arrayNumbers[i]);
    }
  }
  return evenArray;
}

function getOddNumber(arrayNumbers) {
  let OddArray = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 !== 0) {
      OddArray.push(arrayNumbers[i]);
    }
  }
  return OddArray;
}

const arrayNumber = [
  23, 45, 56, 56, 76, 43, 74, 32, 34, 24, 54, 56, 35, 98, 42, 45, 56, 5, 65, 76, 53, 45, 45, 365, 77, 87, 5, 56, 345, 24, 56,
];

const findOddNumber = getOddNumber(arrayNumber);
const OddSum = getSum(findOddNumber);
console.log(OddSum);

const findEvenNumber = getEvenNumber(arrayNumber);
const evenNumber = getSum(findEvenNumber);
console.log(evenNumber);
