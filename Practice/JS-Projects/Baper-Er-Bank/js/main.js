// Only Functional Way
function getElementsByID(ID) {
  let element = document.getElementById(ID);
  element = parseFloat(element.innerText);
  return element;
}

function getInputsByID(ID) {
  const element = document.getElementById(ID);
  const values = parseFloat(element.value);
  return values;
}

function addition(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function innerTexts(id, value) {
  let element = document.getElementById(id);
  element.innerText = value;
}

function emty(id) {
  document.getElementById(id).value = "";
}

// Click Events
document.getElementById("deposit-btn").addEventListener("click", depositFc);

function depositFc() {
  const deposit = addition(
    getElementsByID("total-deposit"),
    getInputsByID("deposit-field")
  );
  const balance = addition(
    getInputsByID("deposit-field"),
    getElementsByID("total-balance")
  );
  if (!isNaN(deposit) && !isNaN(balance)) {
    innerTexts("total-deposit", deposit);
    innerTexts("total-balance", balance);
    emty("deposit-field");
  }
}

// ----===============================-----

document.getElementById("withdraw-btn").addEventListener("click", withdrawFc);
function withdrawFc() {
  const withdraw = addition(
    getElementsByID("total-withdraw"),
    getInputsByID("withdraw-field")
  );
  const balance = minus(
    getElementsByID("total-balance"),
    getInputsByID("withdraw-field")
  );
  if (!isNaN(withdraw) && !isNaN(balance)) {
    innerTexts("total-withdraw", withdraw);
    innerTexts("total-balance", balance);
    emty("withdraw-field");
  }
}
