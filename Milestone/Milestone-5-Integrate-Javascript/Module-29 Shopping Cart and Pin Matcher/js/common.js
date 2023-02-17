/**
 * 1. add event listener to the case plus button
 * 2. get the value inside the case number field (input field)
 * 3. convert the number to an integer
 * 6. calculate the new case number
 * 5. set the value to the case number field
 *
 */

function getTagValue(ID) {
  const element = document.getElementById(ID);
  const eleValue = parseInt(element.innerText);
  return eleValue;
}

function getInputValue(ID) {
  const input = document.getElementById(ID);
  const inpValue = parseInt(input.innerText);
  return inpValue;
}

function updateCaseNumber(inIncrease, changeValue) {
  const previousCaseNumber = getTagValue(changeValue);

  let newCaseNumber;

  if (inIncrease) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }

  caseNumberField.value = newCaseNumber;
  return newCaseNumber;
}

function caseTotalPriceFc(Pice, price, totalCostElement) {
  const caseTotalPrice = Pice * price;

  const caseTotalEle = document.getElementById(totalCostElement);
  caseTotalEle.innerText = caseTotalPrice;
}
