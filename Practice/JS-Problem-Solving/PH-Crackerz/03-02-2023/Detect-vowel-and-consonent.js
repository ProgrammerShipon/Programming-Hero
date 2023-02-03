const solution = (letter) => {
  //Write Your solution Here
  //dont forget to return

  if (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u"
  ) {
    return "VOWEL";
  } else {
    return "CONSONANT";
  }
};

console.log(solution("d"));
