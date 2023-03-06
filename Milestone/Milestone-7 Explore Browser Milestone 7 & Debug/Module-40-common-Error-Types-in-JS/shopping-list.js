// const addInput = document.getElementById(add-field);
const addInput = document.getElementById("add-field");
const colorInput = document.getElementById("color-field");
const itemList = document.getElementById("item-list");

const listDiv = document.getElementById("list-div"); //for hiding/showing
const toggle = document.getElementById("toggle-button");

// add item
function addItem() {
  const lastPickedColor = colorInput.value;
  const li = document.createElement("li");
  li.innerHTML = addInput.value;
  li.style.color = lastPickedColor;
  changeColor();
  itemList.appendChild(li);

  addInput.value = "";
}

// remove item
function removeItem() {
  let li = document.querySelector("li:last-child");
  itemList.removeChild(li);
}

// change color
function changeColor() {
  const List = document.querySelectorAll("li");
  const lastPickedColor = colorInput.value;
  for (let i = 0; i < List.length; i++) {
    List[i].style.color = lastPickedColor;
  }
}

// uppercase
itemList.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.textTransform = "uppercase";
  }
});

// lowercase
itemList.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.textTransform = "lowercase";
  }
});

// hide/show list
function toggleButton() {
  if (listDiv.style.display == "none") {
    listDiv.style.display = "block";
    toggle.textContent = "Hide list";
  } else {
    listDiv.style.display = "none";
    toggle.textContent = "Show list";
  }
}
