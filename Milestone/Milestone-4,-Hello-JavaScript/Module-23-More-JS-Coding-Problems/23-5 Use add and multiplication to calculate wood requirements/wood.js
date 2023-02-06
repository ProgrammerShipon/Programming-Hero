
/**
 * 
 * fixed: per item wood requirements
 * 1. chair --> 3 cft
 * 2. table --> 10 cft
 * 3. bed --> 50 cft
 * 
 * vary: quantity 
 */


function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
   const perChairWood = 3;
   const perTableWood = 10;
   const perBedWood = 500;

   const chairWood = chairQuantity * perChairWood;
   const tableWood = tableQuantity * perTableWood;
   const bedWood = bedQuantity * perBedWood;

   const totalWood = chairWood + tableWood + bedWood;

   return totalWood;
}


const totalWood = woodCalculator(4, 2, 1);
console.log(totalWood);




