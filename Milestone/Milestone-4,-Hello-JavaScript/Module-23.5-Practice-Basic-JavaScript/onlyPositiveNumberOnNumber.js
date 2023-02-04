/**
 *    Problem - 6
 *  [45, 87, 96, 11, 63, -56, 71, 28];
 * onlyPositive()
 */

const numbers = [45, 87, 96, 11, 63, -56, 71, 28];

function onlyPositive(arr) {
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i];
    if (index < 0) {
      break;
    }
    console.log(index);
  }
}

onlyPositive(numbers);
