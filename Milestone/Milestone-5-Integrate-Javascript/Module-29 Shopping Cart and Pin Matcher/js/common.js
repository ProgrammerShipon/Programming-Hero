/**
 * 1. add event listener to the case plus button
 * 2. get the value inside the case number field (input field)
 * 3. convert the number to an integer
 * 6. calculate the new case number
 * 5. set the value to the case number field
 *
 */

function updateCaseNumber(inIncrease, changeValue) {
  const caseNumberField = document.getElementById(changeValue);
  const caseNumberStr = caseNumberField.value;
  const previousCaseNumber = parseInt(caseNumberStr);

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
