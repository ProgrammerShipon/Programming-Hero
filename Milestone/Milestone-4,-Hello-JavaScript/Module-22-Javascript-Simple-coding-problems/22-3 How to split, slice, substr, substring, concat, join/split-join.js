const lyrics =
  "tumi bondhu kala pakhi ami  jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada";
// console.log(lyrics);

const parts = lyrics.split(" ");
// console.log(parts);

const sentence = lyrics.split(".");
// console.log(sentence);

const chars = lyrics.split("");
// console.log(chars);

const partial = lyrics.slice(5, 8);
// console.log(partial);

const partialS = lyrics.substring(5, 8);
// console.log(partialS);

const lines = [
  "tumi bondhu kala pakhi ami  jeno ki",
  " bosonto kale tomai bolte pari ni",
  " kala kala sada sada",
  "rong jomeche sada kala",
];

const newSong = lines.join(". ");
console.log(newSong);
