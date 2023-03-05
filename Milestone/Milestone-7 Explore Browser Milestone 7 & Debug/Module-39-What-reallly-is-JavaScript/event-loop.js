function a() {
  console.log("a");
  b();
  console.log("aa");
}

function b() {
  console.log("b");
  d();
  console.log("bb");
}
a();

function d() {
  console.log("d");
  x();
  console.log("dd");
}

function x() {
  console.log("x");
  y();
  console.log("xx");
}

function y() {
  console.log("y");
  z();
  console.log("yy");
}

function z() {
  console.log("z");
  console.log("zz");
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));
