// console.log("touring");

// get all data and pass only some data using slice to show in the UI
// const loadAllData = () => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => {
//       //   console.log(data);
//       allData = data;
//       showAllData(data.slice(0, 5));
//     });
// };

// loadAllData()

// get all data and pass only some data using slice to show in the UI
const loadMyData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  console.log(data);
  showAllData(data.slice(0, 5));
};
loadMyData();

// show data to UI
const showAllData = (countries) => {
  const countryContainer = document.getElementById("countries-info");
  countryContainer.innerHTML = "";
  countries.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full h-96 bg-base-100 shadow-2xl">
    <figure class="px-10 pt-10">
      <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${country.name.common}</h2>
      <p>Population: ${country.population}</p>
      <p>Currency: ${Object.keys(country.currencies)[0]}</p>
      <div class="card-actions">
        <label onclick="showSingleCountry('${
          country.cca2
        }')" class="btn btn-primary" for="my-modal-3" class="btn">Show Details</label>
      </div>
    </div>
  </div>
    `;
    countryContainer.appendChild(div);
  });
};

// get all data and pass all data using slice to show in the UI when click See All button
const showAllDataTogether = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      showAllData(data);
    });
};

// get single country info using dynamic URL and unique id
const showSingleCountry = (id) => {
  const URL = `
  https://restcountries.com/v3.1/alpha/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSingleCountryDataModal(data[0]));
};

// show single country info in modal using dynamic URL and unique id
const showSingleCountryDataModal = (value) => {
  const container = document.getElementById("modal-info");
  const div = document.createElement("div");
  div.classList.add("modal");
  div.innerHTML = `
  
  <div class="modal-box relative">
  <label
    for="my-modal-3"
    class="btn btn-sm btn-circle absolute right-2 top-2"
    >✕</label
  >
  <img src="${value.flags.png}" alt="">
  <h3 class="text-lg font-bold">
    ${value.name.common}
  </h3>
  <p class="py-4">
    Population : ${value.population}
  </p>
</div>
  `;
  container.appendChild(div);
};
