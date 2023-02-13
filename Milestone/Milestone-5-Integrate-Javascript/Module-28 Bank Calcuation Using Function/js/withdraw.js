/**
 * step -
 * 1. add event listener to the Withdraw button
 * 2. get Withdraw amount from the Withdraw input field
 * 2.5 Convert string Withdraw amount to a number type
 *
 * 3. clear the Withdraw input field after getting the value
 * 4. get the previous Withdraw total
 *
 * 5. calculate new Withdraw total and set the value to the Withdraw total
 *
 * 6. get current balance total
 *
 * 7. calculate the new balance and set it the balance total element
 */

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdrawField.value);

  // step - 3:
  withdrawField.value = "";

  // step-4:
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const totalWithdraw = parseFloat(withdrawTotalElement.innerText);

  // step-5:
  const newWithdrawTotal = totalWithdraw + withdrawAmount;
  if (!isNaN(newWithdrawTotal)) {
    withdrawTotalElement.innerText = newWithdrawTotal;
  }

  // step-6:
  const totalBalanceElement = document.getElementById("balance-total");
  const preBalance = parseFloat(totalBalanceElement.innerText);

  // step-7:
  const newTotalBalance = preBalance - withdrawAmount;
  if (!isNaN(newTotalBalance)) {
    totalBalanceElement.innerText = newTotalBalance;
  }
});
