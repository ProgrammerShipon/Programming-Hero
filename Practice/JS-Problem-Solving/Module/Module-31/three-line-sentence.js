/**
 *       Practice Problem - 2
 * write the following sentence in three lines and print the result :
 *    I am a web developer . I love to code. I love to eat biryani.
 */

const dividedLine = (sentence) => {
  const sentenc = sentence.split(".").join("\n");
  return sentenc;
};

console.log(
  dividedLine("I am a web developer . I love to code. I love to eat biryani.")
);
