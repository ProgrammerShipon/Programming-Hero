const casePrice = 59;

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "case-number-field");
    caseTotalPriceFc(newCaseNumber, casePrice, "case-total-price");
  });

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true, "case-number-field");
  caseTotalPriceFc(newCaseNumber, casePrice, "case-total-price");
});
