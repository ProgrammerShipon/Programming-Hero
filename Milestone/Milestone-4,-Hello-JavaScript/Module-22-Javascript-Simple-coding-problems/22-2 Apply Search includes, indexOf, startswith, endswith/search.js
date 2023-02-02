
const lyrics = 'tumi bondhu kala pakhi ami  jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';

const doesexist = lyrics.includes('pakhi')
// console.log(doesexist)
// console.log(lyrics.includes("pokhi"));


const searchString = 'Pakhi'
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase()
const doeseExist = lyricsLowerCase.includes(searchStringLower);
console.log(doeseExist)
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());


// ---===========================================---

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kaila'));
console.log(lyrics.indexOf('tumi'));

if (lyrics.indexOf('sada') != -1) {
   console.log('eists inside the string');
} else {
   console.log('connot find it');
}


// startWith
console.log(lyrics.startsWith('2mi'));

const fileName = 'myBiodata.pdf';
const otherFile = 'mypic.png';

const checkFileName = fileName.endsWith('.pdf');
console.log(checkFileName);