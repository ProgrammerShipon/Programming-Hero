const person = {
  name: "Lal Nil Holud mia",
  profession: "Traffic",
  age: 39,
  30: "something",
  address: "Shahabag",
  "son-name": "Shila",
};

// dot notation
const prof1 = person.profession;
console.log(prof1);

// bracket notation
const prof2 = person["profession"];
console.log(prof2);

const pName = "profession";
const prof3 = person[pName];
console.log(prof3);

const season = person[30];
console.log(season);

const sonName = person["son-name"];
