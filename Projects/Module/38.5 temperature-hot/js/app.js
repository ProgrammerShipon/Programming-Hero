const API_KEY = `bf1efa9f7ab72b9bf42a602fa15a7d23`;
const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  console.log(data);
  setInnerText("temperature", data.main.temp);
  setInnerText("condition", data.weather[0].main);
  // set city
  document.getElementById("city").innerText = data.name;
};

function setInnerText(id, text) {
  const ids = document.getElementById(id);
  ids.innerText = text;
}

document.getElementById("btn-search").addEventListener("click", () => {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  searchField.innerHTML = "";

  loadTemperature(city);
});

loadTemperature("Pabna");
