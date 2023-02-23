const user = { id: 1, name: "Gorib Aamir", job: "actor" };
// console.log(user);

// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
  owner: "Shipon",
  address: {
    street: "kochukhet voot er goli",
    city: "ranbir",
    country: "BD",
  },
  products: ["latop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);

// convert String format
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// convert normal Js
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
