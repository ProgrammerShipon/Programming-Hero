function temperatureConverter(valNum) {
  let cal = (valNum - 32) / 1.8;
   cal = Number(cal.toFixed(2));
  return cal;
}

console.log(temperatureConverter(50));
