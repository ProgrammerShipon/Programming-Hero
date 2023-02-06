
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babus', 'babul', 'abul', 'cabul', 'babus', 'dabul'];

function removeDuplicate(names) {
   let newArr = [];
   for (let i = 0; i < names.length; i++) {
      const name = names[i];


      if (newArr.includes(name) == false) {
         newArr.push(name);
      } 
   }

   return newArr;
}

// console.log(removeDuplicate(names));
// console.log(names)



function removeDuplicate2Way(names) {
   console.log(names)
  for (let i = 0; i < names.length; i++) {
     
  }

}


console.log(removeDuplicate2Way(names));
console.log(names);