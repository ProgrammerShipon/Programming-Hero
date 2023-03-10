function loadData() {
  const url = "https://randomuser.me/api/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showId(data));
}

const showId = (details) => {
  console.log(details);
  const { email, phone, location, name, picture } = details.results[0];
  const { medium } = picture;
  const { city, state, country } = location;
  const { title, first, last } = name;

  const cardContainer = document.getElementById("card-container");

  const card = `
   
             <div class="flex items-center h-screen w-full justify-center">
            <div class="max-w-xs">
              <div class="bg-white shadow-xl rounded-lg py-3">
                <div class="photo-wrapper p-2">
                  <img
                    class="w-32 h-32 rounded-full mx-auto"
                    src="${medium}"
                    alt="John Doe"
                  />
                </div>
                <div class="p-2">
                  <h3
                    class="text-center text-xl text-gray-900 font-medium leading-8"
                  >
                    ${(title, first, last)}
                  </h3>
                  <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>Web Developer</p>
                  </div>
                  <table class="text-xs my-3">
                    <tbody>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Address
                        </td>
                        <td class="px-2 py-2">
                          ${(city, state, country)}
                        </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Phone
                        </td>
                        <td class="px-2 py-2"> ${phone} </td>
                      </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">
                          Email
                        </td>
                        <td class="px-2 py-2"> ${email} </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="text-center my-3">
                    <button onclick="loadData()" class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                        <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span class="relative text-black group-hover:text-white">Change User</span>
                     </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

   `;

  cardContainer.innerHTML = card;
};

loadData();
