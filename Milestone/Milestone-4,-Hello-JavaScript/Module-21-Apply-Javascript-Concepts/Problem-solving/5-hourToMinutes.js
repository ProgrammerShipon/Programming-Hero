/**
 * Practice-Problem - 5
 *
 * Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.
 *
 */

function getHourToMinutes(hour) {
  let minutes = hour * 60;
  return minutes;
}

function getHourToSeconds(hour) {
  let second = hour * 60 * 60;
  second = second.toFixed(2);
  return second;
}

function getSecondsToHour(second) {
  let hour = hour / 60 / 60;
  hour = hour.toFixed(2);
  return hour;
}

function getMinutesToHour(minutes) {
  let hour = minutes / 60;
  hour = hour.toFixed(2);
  return hour;
}

function getMinutesToSecond(minutes) {
  let second = minutes / 60;
  second = second.toFixed(2);
  return second;
}

function getSecondsToMinute(second) {
  let minute = second * 60;
  minute = minute.toFixed(2);
  return minute;
}

// let hour = 1;
// console.log(getHourToMinutes(hour));

// let minutes = 180;
// console.log(getHour(minutes));

/**
 * @param {H=hour, M=minutes, S=seconds} current your current times
 * @param {Number} number value
 * @param {H=hour, M=minutes, S=seconds } times convert times
 */
function getConvertTime(current, number, times) {
  if (current == "H" || current == "h") {
    if (times == "M" || times == "m") {
      return getHourToMinutes(number);
    } else if (times == "S" || times == "s") {
      return getHourToSeconds(number);
    } else {
      return "Unexpected times";
    }
  } else if (current == "M" || current == "m") {
    if (times == "H" || times == "h") {
      return getMinutesToHour(number);
    } else if (times == "S" || times == "s") {
      return getMinutesToSecond(number);
    } else {
      return "Unexpected times";
    }
  } else if (current == "S" || current == "s") {
    if (times == "H" || times == "h") {
      return getSecondsToHour(number);
    } else if (times == "M" || times == "m") {
      return getSecondsToMinute(number);
    } else {
      return "Unexpected times";
    }
  } else {
    return "Unexpected Current";
  }
}

let rel = getConvertTime("M", 25, "H");
console.log(rel);
