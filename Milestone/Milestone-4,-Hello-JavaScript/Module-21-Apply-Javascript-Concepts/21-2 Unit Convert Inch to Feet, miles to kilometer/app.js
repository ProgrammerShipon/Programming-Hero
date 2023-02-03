//  1.  inch to Feet
const myInches = 12;
const myFeet = myInches / 12;
console.log("my Feet : ", myFeet);

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log("Dada feet : ", dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log("Dadi Feet : ", dadiFeet);

//  function
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}


const dadaFeets = inchToFeet(dadaInches) 
console.log('dada Feet function  : ', dadaFeets )
