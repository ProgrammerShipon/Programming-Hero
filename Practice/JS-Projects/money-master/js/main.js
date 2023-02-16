document.getElementById("calculate").addEventListener("click", function () {
  const income = getInputValue("income");
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("clothes");

  console.log(income, food, rent, clothes);

  const totalExpenses = food + rent + clothes;
  const balance = minus(income, totalExpenses);

  if (!isNaN(totalExpenses) && !isNaN(balance)) {
    displayText("show-expense", totalExpenses);
    displayText("show-balance", balance);
  } else {
    showToast();
  }
});

document.getElementById("btn-saving").addEventListener("click", function () {
  const balance = getElementText("show-balance");

  const savingValue = getInputValue("saving-value");
  const saving = balance - balance * (savingValue / 100);
  const remaining = minus(balance, saving);

  if (!isNaN(saving) && !isNaN(remaining)) {
    displayText("show-saving", saving);
    displayText("show-remaining", remaining);
  } else {
    showToast();
  }
});
