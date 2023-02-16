function getInputValue(ID) {
  const element = document.getElementById(ID);
  const valueString = parseFloat(element.value);
  //   element.value = "";
  if (0 < valueString) return valueString;
}

function getElementText(ID) {
  const element = document.getElementById(ID);
  const valueString = parseFloat(element.innerText);
  return valueString;
}

function displayText(ID, value) {
  const element = document.getElementById(ID);
  element.innerText = value;
}

function minus(num1, num2) {
  return num1 - num2;
}

function showToast() {
  let toast = document.getElementById("open-toast");
  let x;
  clearTimeout(x);
  toast.style.transform = "translateX(0)";
  x = setTimeout(() => {
    toast.style.transform = "translateX(500px)";
  }, 5000);
}
