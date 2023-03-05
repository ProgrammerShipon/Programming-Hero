let intervalID = null;
const setElement = (ID, text) => {
  const element = document.getElementById(ID);
  element.innerText = text;
};

let second = 0;
let minutes = 0;
let hours = 0;
let milliseconds = 0;

function start() {
  console.log("start");
  intervalID = setInterval(displayTimes, 10);
}

function stops() {
  clearInterval(intervalID);
  console.log("stops");
}

function resets() {
  second = 0;
  minutes = 0;
  hours = 0;
  milliseconds = 0;

  setElement("seconds", "0" + second);
  setElement("minutes", "0" + minutes);
  setElement("hour", "0" + hours);
  setElement("milliseconds", "00" + milliseconds);

  clearInterval(intervalID);
  console.log("resets");
}

function displayTimes() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    second++;
    if (second === 60) {
      second = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  ms = milliseconds < 100 ? "0" + milliseconds : milliseconds;
  s = second < 10 ? "0" + second : second;
  m = minutes < 10 ? "0" + minutes : minutes;
  h = hours < 10 ? "0" + hours : hours;

  setElement("milliseconds", ms);
  setElement("seconds", s);
  setElement("minutes", m);
  setElement("hour", h);
}
