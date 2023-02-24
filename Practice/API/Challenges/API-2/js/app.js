console.log(data);

function displayData(data) {
  const cardContainer = document.getElementById("cardContainer");

  data.forEach((card) => {
    console.log(card);

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
         <div>
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
               <img
                  src="${card.imageURL}"
                  alt="${card.name}"
               />
            </figure>
            <div class="card-body">
               <h2 class="card-title">${card.name}</h2>
               
               <p> ${card.description} </p>
               <div class="card-actions justify-start">
                  <button class="btn btn-primary"><p> Price : ${card.price} </p></button>
               </div>
            </div>
            </div>
         </div>
     `;
    cardContainer.appendChild(newDiv);
  });
}

displayData(data);
