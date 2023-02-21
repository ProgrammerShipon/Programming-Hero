const users = [{ id: 1, name: "abul", job: "doctor" }];
console.log(users[0].name);

const data = {
  count: 5000,
  data: [
    { id: 1, name: "babule", job: "leader" },
    { id: 1, name: "dabul", job: "leader" },
  ],
};

const firstJob = data.data[0].job;
console.log(firstJob);

const user = {
  id: 5001,
  name: "Thomas alba edison",
  address: {
    stress: {
      first: "35/A kochukhet lane",
      second: "third floor",
      third: "right side",
    },
    postOffice: "cantonment",
    city: "Dhaka",
  },
};
const userFloor = user.address.stress?.first;
console.log(userFloor);
