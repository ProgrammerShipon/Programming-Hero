const obj = {
  name: "shipon",
  age: 20,
};

const objString = JSON.stringify(obj);
localStorage.setItem("objString", objString);

const localStorageObj = localStorage.getItem("objString");

const localObj = JSON.parse(localStorageObj);
