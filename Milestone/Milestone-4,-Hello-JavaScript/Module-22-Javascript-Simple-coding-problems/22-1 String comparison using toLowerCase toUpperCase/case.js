const userName = "blackPink";
const userInput = "blackPinK";

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());
console.log(userInput.toLocaleUpperCase());

if (userName.toLowerCase() === userInput.toLowerCase()) {
  console.log("valid user");
}
