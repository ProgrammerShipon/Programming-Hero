// Main Data Load
function loadData() {
  const url = `https://restcountries.com/v3.1/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => getCountries(data));
}

const getCountries = (countries) => {
  // Catch Selected Options Container
  const regionContainer = document.getElementById("region-container");
  const capitalContainer = document.getElementById("capital-container");
  const languageContainer = document.getElementById("language-container");

  countries.forEach((country) => {
    // Create a New region
    const newRegion = document.createElement("option");
    newRegion.value = country.ccn3;
    newRegion.innerHTML = `<span>${country.name.common}</span>`;
    regionContainer.appendChild(newRegion);

    // Create a New Capital
    const newCapital = document.createElement("option");
    newCapital.value = country.ccn3;
    newCapital.innerText = country.capital
      ? country.capital.join(", ")
      : "No Capital";
    capitalContainer.appendChild(newCapital);

    // Create a New Language
    const languag =
      country.languages && Object.values(country?.languages)
        ? Object.values(country?.languages).join(", ")
        : "no language";
    const newLanguage = document.createElement("option");
    newLanguage.value = country.ccn3;
    newLanguage.innerHTML = `<span>${languag}</span>`;
    languageContainer.appendChild(newLanguage);
  });
};

const loadRegion = (region) => {
  const url = `https://restcountries.com/v3.1/alpha/${region.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data[0]));
};

const displayDetails = (data) => {
  const displayCountry = document.getElementById("displayCountry");
  const languag =
    data.languages && Object.values(data?.languages)
      ? Object.values(data?.languages).join(", ")
      : "no language";
  console.log(data);
  displayCountry.innerHTML = `
      <figure class="px-10 pt-10">
        <img
          src="${data.flags.png}"
          alt="${data.name.common}"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${data.name.common}</h2>
        <p> Capital: ${data.capital},  Region: ${data.region}</p>
        <p> Languages: ${languag} </p>
        <button class="btn btn-primary" onclick="details()">
          Details
        </button>
      </div>
  `;
};

function details() {
  alert("Not Working");
}

loadData();
