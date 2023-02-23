/**
 * Element Clicked
 * @param {*} id HTML Element Id
 * @param {*} cbF Callback Function
 */
function onClicks(id, cbF) {
  document.getElementById(id).addEventListener("click", cbF);
}

// Board
const board = document.getElementById("borad");

function toggles(property, style1, style2) {
  if (board.style[property] == style1) {
    board.style[property] = style2;
  } else {
    board.style[property] = style1;
  }
}

onClicks("bold", function () {
  toggles("fontWeight", "bold", "normal");
});

onClicks("italic", function () {
  if (board.style.fontStyle == "italic") {
    board.style.fontStyle = "";
  } else {
    board.style.fontStyle = "italic";
  }
});

onClicks("underline", function () {
  console.log("clicked");
  if (board.style.textDecoration == "underline") {
    board.style.textDecoration = "";
  } else {
    board.style.textDecoration = "underline";
  }
});

onClicks("align-center", function () {
  console.log("clicked");
  if (board.style.textAlign == "center") {
    board.style.textAlign = "";
  } else {
    board.style.textAlign = "center";
  }
});

onClicks("align-justify", function () {
  console.log("clicked");
  if (board.style.textAlign == "justify") {
    board.style.textAlign = "";
  } else {
    board.style.textAlign = "justify";
  }
});

onClicks("align-right", function () {
  console.log("clicked");
  if (board.style.textAlign == "right") {
    board.style.textAlign = "";
  } else {
    board.style.textAlign = "right";
  }
});

// onClicks("italic", toggles({ 'fontStyle', 'italic' }));
