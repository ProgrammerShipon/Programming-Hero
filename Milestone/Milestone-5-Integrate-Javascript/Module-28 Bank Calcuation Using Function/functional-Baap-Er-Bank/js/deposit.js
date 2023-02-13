document.getElementById("btn-deposit").addEventListener("click", function () {
  // console.log("deposit btn clicked");
  /**
   * 1. get the element by id
   * 2. get the value from the element
   * 3. convert string value
   */
  const newDepositAmount = getInputFieldValueById("deposit-field");

  // get previous total by id
  const previousDepositTotal = getElementValueByID("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //set deposit Total
  setTextElementByID("deposit-total", newDepositTotal);

  // get previous balance by using function
  const previousBalanceTotal = getElementValueByID("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementByID("balance-total", newBalanceTotal);
});
