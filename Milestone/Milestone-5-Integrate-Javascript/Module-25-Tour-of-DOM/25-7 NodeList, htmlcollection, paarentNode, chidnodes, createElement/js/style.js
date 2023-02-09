const placesContainer = document.getElementById("places-container");

console.log(placesContainer);
console.log(placesContainer.childNodes[3]);
console.log(placesContainer.childNodes[3].childNodes);

const placesContainerUl = document.querySelector("#places-container ul");
console.log(placesContainerUl);
const li = document.createElement("li");
li.innerText = "Barand New Place to go";
placesContainerUl.appendChild(li);


// console.log(placesContainer.parentNode)
// console.log(placesContainer.parentNode.parentNode)
// console.log(placesContainer.parentNode.parentNode.parentNode)
// console.log(placesContainer.parentNode.parentNode.parentNode.parentNode)

console.log('---------------------')
const pc = document.getElementById("places-container");
console.log(pc.childNodes[3])

const cli = document.createElement('li')
li.innerText = 'another dynamic li';
pc.childNodes[3].appendChild = 'li'


