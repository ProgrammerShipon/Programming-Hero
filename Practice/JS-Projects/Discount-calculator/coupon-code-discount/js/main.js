function getInputValue(id) {
  const element = document.getElementById(id);
  let values = element.value;
  values = parseFloat(element.value);
  element.value = "";
  return values;
}

function getInputValueStr(id) {
  const element = document.getElementById(id);
  let values = element.value;
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

function discountFc(value, ModulesValue) {
  return value - value * (ModulesValue / 100);
}

document.getElementById("btn-discount").addEventListener("click", function () {
  const inputValue = getInputValue("input-value");
  const cuponValue = getInputValueStr("cupon-code");
  let discount = getElementsValue("discount");
  let total = inputValue;

  if (cuponValue === "DISC30") {
    discount = "30";
    total = discountFc(inputValue, discount);
  } else {
    discount = 0;
  }

  if (!isNaN(inputValue) && !isNaN(total)) {
    setInnerText("yourValue", inputValue);
    setInnerText("discount", `${discount}%`);
    setInnerText("show-value", total);
  }
});
