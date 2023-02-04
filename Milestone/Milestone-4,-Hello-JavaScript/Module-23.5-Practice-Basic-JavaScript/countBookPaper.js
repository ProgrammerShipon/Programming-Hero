/**
 *    Problem - 4
 * counter paper
 *  book1 = 100;  // page
 *  book2 = 200;  // page
 *  book3 = 300;  // page
 *
 * parameter - ?
 *  book any pice
 *  total page return
 *
 * paperRequirements (book1, book2, book3)
 */

function paperRequirements(book1, book2, book3) {
   const book1Paper = 100;
   const book2Paper = 200;
   const book3Paper = 300;

   const book1Page = book1 * book1Paper;
   const book2Page = book2 * book2Paper;
   const book3Page = book3 * book3Paper;

   const totalPage = book1Page + book2Page + book3Page;
   return totalPage;
}

console.log(paperRequirements(5, 6, 10));

