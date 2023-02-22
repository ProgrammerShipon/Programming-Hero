/**
 *       Practice Problem - 5
 *  const people = [
   {name: 'Meena', age: 20},
   {name: 'Rina', age: 15},
   {name: 'Suchorita', age: 25},
]
* 1) Challenging Follow above array of objects So, you have 3 objects as array element. Can you find out the total sum from here ?
 * 20 + 15 + 25 = 60 The output will be 60
 * 
 * What are you thinking ? Yeah ! Do it with for loop . I know you can do it .
 * But ! Wait !!  Wait !!! Do the same task using array.reduce() method
 */

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 25 },
];

const ageAdding = people.reduce((sum, person) => {
  return sum + person.age;
}, 0);
console.log(ageAdding);
