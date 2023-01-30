function add(num1, num2) {
  console.log(num1, num2);
  var sum = num1 + num2;
  // console.log(sum)
  return sum;
}

add(34, 45);
var total = add(89, 45);
console.log("Total : " + total);


function bringSingara(money) {
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;
}
var myTaka = 150
var singaras = bringSingara(myTaka);
console.log(singaras)

