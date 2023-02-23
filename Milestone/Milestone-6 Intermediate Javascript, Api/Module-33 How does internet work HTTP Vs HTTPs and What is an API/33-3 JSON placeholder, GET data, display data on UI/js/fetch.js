// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
//   console.log(response.json())
// ); // .json is not similar but close to  JSON.parse
//   .then((json) => console.log(json));

const url = "https://jsonplaceholder.typicode.com/todos/1";

function loadData() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
