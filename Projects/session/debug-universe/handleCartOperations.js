const addToCart = async (id) => {
  const data = await fetch(`ROOMS.json`);
  const result = await data.json();
  const {
    name,
    summary,
    property_type,
    images,
    number_of_reviews,
    price,
    _id,
  } = result.find((item) => item._id == id);
  console.log(id, _id);

  const cartItems = getItemsFromStorage();

  if (cartItems.find((item) => item._id == id)) {
    return;
  }

  cartItems.push({
    name,
    summary,
    property_type,
    images,
    number_of_reviews,
    price,
    _id,
  });
  localStorage.setItem("saved-Cart", JSON.stringify(cartItems));
  displayCartItems();
};

const getItemsFromStorage = () => {
  let itemsArray = [];
  const cartItems = localStorage.getItem("saved-Cart");
  if (cartItems) {
    itemsArray = JSON.parse(cartItems);
  }
  return itemsArray;
};

const displayCartItems = () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartItems = getItemsFromStorage();
  cartItemsContainer.innerHTML = "";
  cartItems.forEach((item) => {
    const { name, property_type, images, number_of_reviews, price, _id } = item;
    cartItemsContainer.innerHTML += `
        <tr>
          <th scope="row">${name.slice(0, 26)}</th>
          <td>
            <span onclick="deleteItemFromCart(${_id})">
              <i class="mx-2 bi bi-trash3 text-danger"></i>
            </span>
            <span onclick="handlePaymentInfo('${_id}')">
              <i
                class="text-success bi bi-credit-card-fill"
                data-bs-toggle="modal"
                data-bs-target="#randomInfoModal"
              ></i>
            </span>
          </td>
        </tr>
       
        `;
  });
};
displayCartItems();

const deleteItemFromCart = (id) => {
  console.log(id);
  const cartItems = getItemsFromStorage();
  const filteredItems = cartItems.filter((item) => item._id != id);
  console.log(filteredItems);
  localStorage.setItem("saved-Cart", JSON.stringify(filteredItems));
  displayCartItems();
};
