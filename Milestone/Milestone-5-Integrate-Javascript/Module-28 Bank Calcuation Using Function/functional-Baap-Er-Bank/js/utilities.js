function getInputFieldValueById(inputFieldID) {
  const inputField = document.getElementById(inputFieldID);
  const inputFieldValueStr = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueStr);
  inputField.value = "";
  return inputFieldValue;
}

function getElementValueByID(ElementID) {
  const element = document.getElementById(ElementID);
  const elementValueStr = element.innerText;
  const value = parseFloat(elementValueStr);
  return value;
}

function setTextElementByID(elementID, newValue) {
  const textElement = document.getElementById(elementID);
  textElement.innerText = newValue;
}
