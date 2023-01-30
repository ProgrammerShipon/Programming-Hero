var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

// when you know the specific property name, use dot notation to get the property value

var penCount = shoppingCart.pen;
console.log("penCount : ", penCount);

// alternative System
// When you know the specific  proper name, use dot notation to get the property value

var penCount2 = shoppingCart["pen"];
console.log("penCount2 : ", penCount2);

var properties = Object.keys(shoppingCart);
console.log("properties or keys : ", properties);

var propertyValue = Object.values(shoppingCart);
console.log("propertyValue or Values : ", propertyValue);

var propertyName = "mouse";
var propertyNameValue = shoppingCart[propertyName];
console.log(propertyName, propertyNameValue);

shoppingCart.mouse = 20;
console.log(shoppingCart)

shoppingCart[propertyName] = 50;
console.log(shoppingCart);