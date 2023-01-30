var numbers = [1, 3, 6, 3, 5, 8, 4, 8];
// console.log(numbers);
var slices = numbers.slice(3, 6);
// console.log(slices);
// console.log("slice " + numbers);

var names = " Ariana Grande is singing";
console.log(names.includes("Hello")); // false
console.log(names.includes("Grande")); // true

console.log(names.substring(0, 10));   // Ariana Gr
console.log(names.substring(5, 10));   // na Gr
