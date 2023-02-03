const myString = 'I am a good boy';

function reverseWords(str) {
   const words = str.split(' ');
   const result = [];

   for (let i = words.length - 1; i >= 0; i--) {
      const element = words[i]
      result.push(element)
   }
   return result.join(' ')
}

const mystr = reverseWords(myString);
console.log(mystr)