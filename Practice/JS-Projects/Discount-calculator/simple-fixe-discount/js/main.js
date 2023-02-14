function getInputValue(id) {
  const element = document.getElementById(id);
  const values = parseFloat(element.value);
  element.value = "";
  return values;
}

function getElementsValue(id) {
  let element = document.getElementById(id);
  element = parseFloat(element.innerText);
  return element;
}

function setInnerText(id, values) {
  let element = document.getElementById(id);
  element.innerText = values;
}

document.getElementById("btn-discount").addEventListener("click", function () {
  const inputValue = getInputValue("input-value");
  const discount = getElementsValue("discount");
  const total = inputValue - inputValue * (discount / 100);

  setInnerText("YourValue", inputValue);
  setInnerText("show-value", total);
});
