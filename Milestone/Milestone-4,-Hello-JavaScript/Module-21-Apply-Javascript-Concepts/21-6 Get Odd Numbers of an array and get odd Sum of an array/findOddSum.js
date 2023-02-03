// get Odd Number Function
function getOddNumber(numbers) {
  let OddValueSum = [];

  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];

    if (element % 2 === 1) {
      OddValueSum.push(element);
    }
  }

  return OddValueSum;
}

// get Even Number Function
function getEvenNumber(numbers) {
  let evenValueSum = [];

  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];

    if (element % 2 === 0) {
      evenValueSum.push(element);
    }
  }

  return evenValueSum;
}

// Any Array Some
function getSumOfAnArray(arrays) {
  let arraySum = 0;
  for (let i = 0; i < arrays.length; i++) {
    let index = i;
    let element = arrays[index];
    console.log(element);
    arraySum += element;
  }
  return arraySum;
}

const myNumbers = [12, 23, 34, 23, 12, 32, 12, 44, 45, 32, 43];
console.log(getOddNumber(myNumbers));

console.log("Array Sum Odd : ", getSumOfAnArray(getOddNumber(myNumbers)));
console.log("Array Sum Even : ", getSumOfAnArray(getEvenNumber(myNumbers)));
