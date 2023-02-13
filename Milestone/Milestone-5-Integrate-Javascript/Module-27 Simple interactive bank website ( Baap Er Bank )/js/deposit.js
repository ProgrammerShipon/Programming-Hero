// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step-2: get the deposit amount from the deposit input field
  // For input field use .value to the value inside the input field
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountStr = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountStr);

  // step-3: get the current deposit total
  // for non-input (element other than input , textarea) use innerText to get the text
  const depositElement = document.getElementById("current-deposit");
  const previousDepositTotal = parseFloat(depositElement.innerText);

  // step-4: add numbers to set the total deposit
  const currentDepositTotal = newDepositAmount + previousDepositTotal;

  // step-5: get balance current total  balance
  const balanceTotalEle = document.getElementById("balance-total");
  const PreviousBalanceTotal = parseFloat(balanceTotalEle.innerText);

  // step-6: calculate current total balance
  const totalBalance = newDepositAmount + PreviousBalanceTotal;

  // step-8: clear the deposit field
  depositField.value = "";

  if (!isNaN(currentDepositTotal) && !isNaN(totalBalance)) {
    // step-7: output
    // set the deposit total
    depositElement.innerText = currentDepositTotal;
    // set the Balance total
    balanceTotalEle.innerText = totalBalance;
  }
});
