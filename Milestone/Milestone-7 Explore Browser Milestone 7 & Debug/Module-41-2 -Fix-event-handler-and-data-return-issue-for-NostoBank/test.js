const arrayOfObject = [
  {
    name: "Paul",
    country: "Canada",
  },
  {
    name: "Faul",
    country: "Canada",
  },
  {
    name: "Lea",
    country: "Italy",
  },
  {
    name: "John",
    country: "Italy",
  },
];

let lea = arrayOfObject.filter(function (obj) {
  //loop through each object
  for (key in obj) {
    //check if object value contains value you are looking for
    if (obj[key].includes("Canada")) {
      //add this object to the filtered array
      return obj;
    }
  }
});

console.log(lea);
