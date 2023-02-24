const loadMeals = (searchText = "fish") => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMeals(data.meals))
    .catch((error) => console.log(error));
};

// async await
const loadMealDetailsAsync = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${idMeal}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals);
  } catch (err) {
    console.log(err);
  }
};

const showMeals = (meals) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
            <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">
                  ${meal.strInstructions.substr(0, 130)}
                </p>
                <button onclick="loadMealDetails(${
                  meal.idMeal
                })" type="button" class="btn btn-primary"     data-bs-toggle="modal" data-bs-target="#mealDetailsModal">
                  Details
                </button>
              </div>
            </div>
      `;
    cardContainer.appendChild(mealDiv);
  });
};

const searchMeals = () => {
  const searchField = document.getElementById("search-field").value;
  loadMeals(searchField);
};

const loadMealDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  document.getElementById("mealDetailsLabel").innerText = " ";
  document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
  const mealDetails = document.getElementById("mealDetailsBody");
  mealDetails.innerHTML = "";
  mealDetails.innerHTML = `
    <img class="img-fluid" src="${meal.strMealThumb}" />
  `;
};

loadMeals();
