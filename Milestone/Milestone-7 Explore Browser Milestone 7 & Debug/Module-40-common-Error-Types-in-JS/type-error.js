const numbs = 4;
// numbs.push(45); // TypeError: numbs.push is not a function

let address;
// console.log(address.home);  // TypeError: Cannot read properties of undefined (reading 'home')

let addres = {};
// console.log(addres.home); // undefined

let addre = { city: "bBaria", postCode: 345 };
// console.log(addre.home.building); // TypeError: Cannot read properties of undefined (reading 'building')
console.log(addre?.home?.building);

const a = "abul";
a = "babul"; // TypeError: Assignment to constant variable.
