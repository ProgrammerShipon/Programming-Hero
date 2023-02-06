const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "sliver",
  },
  {
    name: "Walton",
    camera: 10,
    storage: "32gb",
    price: 22000,
    color: "sliver",
  },
  {
    name: "Iphone",
    camera: 12,
    storage: "32gb",
    price: 82000,
    color: "sliver",
  },
  {
    name: "Xaomi",
    camera: 10,
    storage: "32gb",
    price: 52000,
    color: "sliver-white",
  },
  {
    name: "Oppo",
    camera: 12,
    storage: "32gb",
    price: 20000,
    color: "sliver-gray",
  },
  {
    name: "Nokia",
    camera: 10,
    storage: "32gb",
    price: 44000,
    color: "black-gray",
  },
  {
    name: "HTC",
    camera: 12,
    storage: "32gb",
    price: 62000,
    color: "sliver-black",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];

    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  console.log(cheapest);
}

const mySelection = cheapestPhone(phones);
