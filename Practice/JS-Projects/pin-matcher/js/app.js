function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

function getPin() {
  const pin = generatePin();
  const pinString = pin + "";

  if (pinString.length === 4) {
    return pin;
  } else {
    console.log("pin not 3 digit found", pin);
    return getPin();
  }
}

document.getElementById("generate-btn").addEventListener("click", function () {
  const pin = getPin();

  // display pin
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById("typed-number");

    if (isNaN(number)) {
      if (number === "C") {
        typedNumberField.value = "";
      } else if (number === "<") {
        const num = typedNumberField.value.slice(
          0,
          typedNumberField.value.length - 1
        );
        typedNumberField.value = num;
      }
    } else {
      const previousTypedNumber = typedNumberField.value;
      const newTypeNumber = previousTypedNumber + number;
      typedNumberField.value = newTypeNumber;
    }
  });

// Pin matching
function check() {
  const rightText =
    '<p class="notify">✅ Pin Matched. Secret door is opening for you</p>';
  const wrongText = `<p class="notify">❌ Pin Didn't Match, Please try again</p>`;

  const showResult = document.getElementById("showResult");
  const generatePin = document.getElementById("display-pin");
  const typedNumber = document.getElementById("typed-number");

  // check
  if (generatePin.value === typedNumber.value) {
    showResult.innerHTML = rightText;
  } else {
    showResult.innerHTML = wrongText;
  }

  // value emty
  generatePin.value = "";
  typedNumber.value = "";
}
