// Only Functional Way
function getElementsByID(ID) {
  let element = document.getElementById(ID);
  element = parseFloat(element.innerText);
  return element;
}

function getInputsByID(ID) {
  let element = document.getElementById(ID);
  element = parseFloat(element.value);
  return element;
}

// Click Events
document.getElementById("deposit-btn").addEventListener("click", depositFc);

function depositFc() {
  getElementsByID("total-deposit");
}

// ----===============================-----

document.getElementById("withdraw-btn").addEventListener("click", withdrawFc);
function withdrawFc() {
  getInputsByID("withdraw-field");
}
