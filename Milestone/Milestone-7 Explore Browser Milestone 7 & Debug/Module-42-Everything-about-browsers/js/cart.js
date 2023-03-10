const addProduct = () => {
  const quantityField = document.getElementById("product-name");
  const productField = document.getElementById("product-quantity");

  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = "";
  quantityField.value = "";

  console.log(product, quantity);
  displayProduct(quantity, product);
};

const displayProduct = (product, quantity) => {
  console.log(product, quantity);
  saveProductToLocalStorage(product, quantity);
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productContainer.appendChild(li);
  saveProductToLocalStorage(product, quantity);
};

const getStoredShoppingCart = () => {
  const storedCard = localStorage.getItem("cart");
  let cart = {};
  if (storedCard) {
    cart = JSON.parse(storedCard);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartString = JSON.stringify(cart);
  console.log(cartString);
  localStorage.setItem("cart", cartString);
};

const displayProductsFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  console.log(savedCart);

  for (const product in savedCart) {
    const quantity = savedCart[product];
    console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
displayProductsFromLocalStorage();
