function getSumOfAnArray(numbers) {
  console.log('Your value : ' , numbers);
  let OddValueSum = 0;
  let EvenValueSum = 0;

//   let valueObj = {
//     OddValueSum: 0,
//     EvenValueSum: 0,
//   };

  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];

    if (element % 2 == 0) {
      EvenValueSum += element;
    } 
   }
   
//   valueObj.EvenValueSum = EvenValueSum;
//   valueObj.OddValueSum = OddValueSum;
//   return valueObj;
   
   return EvenValueSum;
}

const myNumbers = [12, 23, 34, 23, 12, 32, 12, 44, 45, 32, 43];
console.log(getSumOfAnArray(myNumbers));


// let functionValue = getSumOfAnArray(myNumbers);
// let OddValueSum = functionValue.EvenValueSum;
// let EvenValueSum = functionValue.OddValueSum;
// console.log(OddValueSum, EvenValueSum);
