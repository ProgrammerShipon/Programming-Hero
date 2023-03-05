console.log(1);
console.log(2);
doSomething();
console.log(4);
console.log(5);
setTimeout(() => {
  console.log("lazy logged");
}, 4000);
console.log(6);
console.log(7);
console.log(8);

function doSomething() {
  console.log(3);
}
