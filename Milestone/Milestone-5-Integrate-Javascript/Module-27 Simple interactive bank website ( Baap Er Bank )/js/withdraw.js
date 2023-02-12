/**
 *  1. add event handler with the withdraw button
 *  2. get the withdraw amount from the withdraw input field
 *  2.5. also make sure to convert the input into a number by using parseFloat
 *  3. Get previous withdraw total
 *
 *  4. calculate total withdraw amount
 *  4.5 set total withdraw amount
 *
 *  8. clear the input field
 */

// step-1: add event listener to the deposit button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // For input field use .value to the value inside the input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountStr = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountStr);

  // step-3: get the current deposit total
  // for non-input (element other than input , textarea) use innerText to get the text
  const currentWithdrawElement = document.getElementById("current-withdraw");
  const previousDepositTotal = parseFloat(currentWithdrawElement.innerText);

  // step-4: add numbers to set the total deposit
  const currentWithdrawTotal = newWithdrawAmount + previousDepositTotal;

  // step-5: get balance current total  balance
  const balanceTotalEle = document.getElementById("balance-total");
  const PreviousBalanceTotal = parseFloat(balanceTotalEle.innerText);

  // step-6: calculate current total balance
  const totalBalance = PreviousBalanceTotal - newWithdrawAmount;

  // step-7: output
  // set the deposit total
  currentWithdrawElement.innerText = currentWithdrawTotal;
  // set the Balance total
  balanceTotalEle.innerText = totalBalance;

  // step-8: clear the deposit field
  withdrawField.value = "";
});
