console.log('Connected')
const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) => {
  
   const allCountriesHTML = countries.map(country => getCountryHTML(country))
   console.log(allCountriesHTML)
   const container = document.getElementById('countries')
   container.innerHTML = allCountriesHTML.join(' ')
}

// Original
// const getCountryHTML = (country) => {
//     return `
//       <div class="country">
//          <h2> ${country.name.common} </h2>
//          <img src="${country.flags.png}" />
//       </div>
//     `
// }

// option - 1
// const getCountryHTML = (country) => {
//   const {name , flags} = country
//     return `
//       <div class="country">
//          <h2> ${name.common} </h2>
//          <img src="${flags.png}" />
//       </div>
//     `
// }

// option - 2
const getCountryHTML = ({name , flags, area, region}) => {
    return `
      <div class="country">
         <h2 title="this is mouseover. you will see when you put the mouse over me"> ${name.common} </h2>
         <p> Area :  ${area} </p>
         <p> Continet :  ${region} </p>
         <img src="${flags.png}" />
      </div>
    `
}


loadCountries()