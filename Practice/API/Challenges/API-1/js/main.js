document.getElementById("pratice-title").innerText = person.message;

function displayData(personParaM) {
  const persons = personParaM.result;

  const personContainer = document.getElementById("personContainer");
  persons.forEach((person) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col");
    newDiv.innerHTML = `
         <div>
            <div class="card shadow">
            <div class="card-header">
               <h2 style="d-block"> Person Name : ${person.name.common} </h2>
            </div>
            <div class="card-body">
               <blockquote class="blockquote mb-0">
                  <div>
                     <p>age : ${person.age} </p>
                     <p> Address: ${person.address.street}, House: ${person.address.house} </p>
                  </div>
               </blockquote>
            </div>
            </div>
         </div>
     `;
    personContainer.appendChild(newDiv);
  });
}

displayData(person);
