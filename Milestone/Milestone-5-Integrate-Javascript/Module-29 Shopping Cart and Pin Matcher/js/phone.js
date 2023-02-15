const phonePrice = 1219;

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false, "phone-number-field");
    caseTotalPriceFc(newCaseNumber, phonePrice, "phone-total-price");
  });

document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(true, "phone-number-field");
    caseTotalPriceFc(newCaseNumber, phonePrice, "phone-total-price");
  });
