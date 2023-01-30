// array vs object
var shoppingItems = ["books", "sunglass", "shoes", "pen"];
var friendsAge = [12, 23, 34, 5, 3, 2, 3];
var friendsAges = {
  rahim: 12,
  samad: 23,
  karim: 45,
  jamal: 32,
  robi: 21,
  kazi: 33,
};

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  bottle: 3,
};
const keys = Object.keys(shoppingCart);
console.log(keys);

const value = Object.values(shoppingCart);
console.log(value);

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'bottle' ]

for (var i = 0; i < keys.length; i++) {
  // console.log(keys[i])
}

for (var i = 0; i < keys.length; i++) {
  var propertyName = keys[i];
  var propertyValue = shoppingCart[propertyName];
  console.log(propertyName, " : ", propertyValue);
}

console.log('----========================---')

// for in loop
for (var propertyName in shoppingCart) {
  const value = shoppingCart[propertyName]
  console.log(propertyName, ' = ', value)
}
