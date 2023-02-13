/**
 * 1. add withdraw button event handler
 * 2. get withdraw amount by using getInputFieldValueById function
 * 3. get previous withdraw amount by using getTextElementValueById function
 * 4. calculate new withdraw Total and set the value
 * 4-5. set new withdraw total by using setTextElementByID function
 * 5. get previous balance total by using getTextElementValueByID function
 * 6. calculate new balance total
 * 7. set balance total using setTextElementValue
 */

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getElementValueByID("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  const previousBalanceTotal = getElementValueByID("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  if (!isNaN(newWithdrawAmount) && !isNaN(newBalanceTotal)) {
    setTextElementByID("withdraw-total", newWithdrawTotal);
    setTextElementByID("balance-total", newBalanceTotal);
  }
});
