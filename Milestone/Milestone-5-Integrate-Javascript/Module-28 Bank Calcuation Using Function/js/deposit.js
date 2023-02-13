/**
 * step -
 * 1. add event listener to the deposit button
 * 2. get deposit amount from the deposit input field
 * 2.5 Convert string deposit amount to a number type
 *
 * 3. clear the deposit input field after getting the value
 * 4. get the previous deposit total
 *
 * 5. calculate new deposit total and set the value to the deposit total
 *
 * 6. get current balance total
 *
 * 7. calculate the new balance and set it the balance total element
 */

document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmount = parseFloat(depositField.value);

  // step - 3:
  depositField.value = "";

  // step-4:
  const depositTotalElement = document.getElementById("deposit-total");
  const totalDeposit = parseFloat(depositTotalElement.innerText);

  // step-5:
  const newDepositTotal = totalDeposit + depositAmount;
  if (!isNaN(newDepositTotal)) {
    depositTotalElement.innerText = newDepositTotal;
  }

  // step-6:
  const totalBalanceElement = document.getElementById("balance-total");
  const preBalance = parseFloat(totalBalanceElement.innerText);

  // step-7:
  const newTotalBalance = preBalance + depositAmount;
  if (!isNaN(newTotalBalance)) {
    totalBalanceElement.innerText = newTotalBalance;
  }
});
