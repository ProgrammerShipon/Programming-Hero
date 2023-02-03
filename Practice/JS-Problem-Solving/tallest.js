/**
 *    problem solving
 *
 * Who is the tallest ?
 *
 * Tom and his friends are participating in the 'Who is the tallest ?' competition. As per the name, the person with the hightest will be the winner. Can you find who is the tallest among tom and all of his friends?
 *
 * Input :
 * The input line can have multiple integer numbers , xi (the height of i^th friend in cm)
 *
 * output :
 * print the height of the tallest friend (cm)
 *
 *
 * sample input-1
 * 157, 134, 188
 *
 * sample output-1
 * 188
 */

function maxInArray(number) {
  let largest = number[0];

  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    if (element > largest) {
      largest = element;
    }
  }

  return largest;
}

const heights = [167, 190, 120, 574, 165, 137];
const tallest = maxInArray(heights);
console.log("tallest person : ", tallest);
