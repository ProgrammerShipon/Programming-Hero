const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};

const keys = Object.keys(bottle);
// console.log(keys);
// output: [ 'color', 'price', 'isCleaned', 'capacity' ]

//----------------------------------------------------------

const values = Object.values(bottle);
// console.log(values);
// output: [ 'yellow', 50, true, 1 ]

//----------------------------------------------------------

const pair = Object.entries(bottle);
// console.log(pair);
// output:  [
//   [ 'color', 'yellow' ],
//   [ 'price', 50 ],
//   [ 'isCleaned', true ],
//   [ 'capacity', 1 ]
// ]

//----------------------------------------------------------

// console.log(bottle); // Original Object console
// output: { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }

//----------------------------------------------------------

// delete bottle.isCleaned;  // delete object properties
// console.log(bottle);
// output: { color: 'yellow', price: 50, capacity: 1 }

//----------------------------------------------------------

// console.log(bottle); // Original Object console
Object.seal(bottle); // delete object properties, not delete but modified
delete bottle.isCleaned;
// console.log(bottle);
// output: { color: 'yellow', price: 50, isCleaned: true, capacity: 1 }
bottle.price = 6000; // modified
// console.log(bottle);
// output: { color: 'yellow', price: 6000, isCleaned: true, capacity: 1 }

//----------------------------------------------------------

console.log(bottle);
Object.freeze(bottle);
delete bottle.color;
bottle.capacity = 765;
console.log(bottle);
