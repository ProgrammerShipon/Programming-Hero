function addToLocalStorage() {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;
  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  if (id && value) {
    localStorage.setItem(id, value);
  }

  idInput.value = "";
  valueInput.value = "";
}

// local storage Object
const myDetail = {
  name: "Shipon",
  location: "Dhalachar, Aminpur",
  age: 20,
};

localStorage.setItem("myDetail", JSON.stringify(myDetail));
const storeMy = localStorage.getItem("myDetail");
const myStoreParse = JSON.parse(storeMy);
console.log(storeMy);
console.log(myStoreParse);
