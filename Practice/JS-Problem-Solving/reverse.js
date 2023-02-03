const myString = "I am a good boy";

function reverseString(text) {
  let temp = "";
  for (let i = 0; i <= text.length - 1; i++) {
    const element = text[i];
    temp += element;
    console.log(element);
  }
  return temp;
}

const reversed = reverseString(myString);
console.log(reversed);
// reverseString(myString);
// console.log(reverseString(myString));

function reverseStringRv(text) {
  let revers = "";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    revers += element;
    console.log(element);
  }
  return revers;
}

const reversedRv = reverseStringRv(myString);
console.log(reversedRv);

// reverseStringRv(myString);
// console.log(reverseStringRv(myString));