console.log("This is separate");

// option 1: directly set on the HTML Element
{
  /* <button onclick="console.log(7)">Click Me</button>; */
}

// option-2: add onclick function on the html element
// Important: we will use this
{/* <button onclick="makeBlue()">Make Blue</button>; */}
function makeBlue() {
  document.body.style.backgroundColor = "Blue";
}

const btnGay = document.getElementById("make-gay");
btnGay.onclick = makeGray;

function makeGray() {
  document.body.style.backgroundColor = "gray";
}

const btnPurple = document.getElementById("make-purple");
btnPurple.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

const btnPink = document.getElementById("make-pink");
btnPink.addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
});

const btnGreen = document.getElementById("make-green");
btnGreen.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option: 4 final
document
  .getElementById("make-foldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
