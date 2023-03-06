const loadPhones = async (searchText, limitData) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, limitData);
};

const displayPhones = (phones, limitData) => {
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.innerHTML = "";

  // Display 10 Phones only
  const showAll = document.getElementById("show-all");
  if (limitData && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }

  const noPhone = document.getElementById("no-found-message");
  if (phones.length == 0) {
    noPhone.classList.remove("d-none");
    isLoadingSpinner(false);
  } else {
    noPhone.classList.add("d-none");
  }

  //  all phones
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
         <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a
                natural lead-in to additional content. This content is a
                little bit longer.
              </p>
              <button 
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#mobileDetails"
                onclick="loadDetails('${phone.slug}')"> Show Details </button>
            </div>
         </div>
      `;
    phonesContainer.appendChild(phoneDiv);

    // stop loading spinner
    isLoadingSpinner(false);
  });
};

// Search Enter press
document.getElementById("search-field").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    processSearch(10);
  }
});

// search button click
document
  .getElementById("searchBtn")
  .addEventListener("click", () => processSearch(10));

// searching process
function processSearch(limitData) {
  // start loading spinner
  isLoadingSpinner(true);

  const searchField = document.getElementById("search-field").value;
  loadPhones(searchField, limitData);
}

// show all phones
document
  .getElementById("show-all-btn")
  .addEventListener("click", () => processSearch());

// loading spinner
function isLoadingSpinner(isLoading) {
  const loadSection = document.getElementById("loading-spinner");
  if (isLoading) {
    loadSection.classList.remove("d-none");
  } else {
    loadSection.classList.add("d-none");
  }
}

const loadDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;

  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
};

function displayDetails(data) {
  const modalTitle = document.getElementById("modal-titles");
  modalTitle.innerText = data.name;

  const detailsBody = document.getElementById("details-body");
  detailsBody.innerHTML = `
  <div class="card">
    <img src="${
      data.image
    }" style="height: 250px; width: 200px;" class="mx-auto card-img-top" alt="${
    data.name
  }">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> chipSet: ${
        data.mainFeatures.chipSet
          ? data.mainFeatures.chipSet
          : "No chipSet info"
      }</li>
      <li class="list-group-item"> display: ${
        data.mainFeatures.displaySize
          ? data.mainFeatures.displaySize
          : "No display size info"
      }</li>
      <li class="list-group-item"> memory: ${
        data.mainFeatures.memory ? data.mainFeatures.memory : "No memory info"
      }</li>
      <li class="list-group-item"> storage: ${
        data.mainFeatures.storage
          ? data.mainFeatures.storage
          : "No storage info"
      }</li>
      <li class="list-group-item"> Release Date: ${
        data.name ? data.name : "No Release info"
      }</li>
    </ul>
  </div>
  `;
}

loadPhones("apple", 10);
