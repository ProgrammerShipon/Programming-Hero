// 1.  Display 'Ajke amar mon valo nei' for 39 time
for (let i = 0; i < 40; i++) {
  //   console.log(i + " - Aj amar mon valo nei");
}

// 2. Display numbers between 58 to 98
for (let i = 58; i <= 98; i++) {
  // console.log(i + ' ,')
}

// 3. Show all even numbers from 412 to 456
for (let i = 412; i <= 456; i += 2) {
  //   console.log(i + " , ");
}

// 4. Show all odd number 581 to 623
for (let i = 581; i <= 623; i += 2) {
  //   console.log(i + " ,");
}

// 5. Declare an array for all the topics that you have learned last few days display then as output
var haveLearned = ["HTML", "CSS", "BOOTSTRAP", "TAILWIND", "JAVASCRIPT"];
for (let i = 0; i < haveLearned.length; i++) {
  //   console.log(haveLearned[i]);
}

// 6. Create an array for all the mobile phones. Display all the elements of the array by using a while loop
var usePhone = [
  "Nokia",
  "itel",
  "huawei",
  "symphony",
  "samsung",
  "Iphone-5",
  "Iphone-6S",
];
var f = 0;
while (f < usePhone.length) {
  // console.log(usePhone[f]);

  f++;
}

// 7. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
for (let i = 30; i <= 86; i++) {
  if (i > 44) {
    break;
  }
  //   console.log(i + " ,");
}

// 8. Write the price of the books that you have . Display the prices if the prices is lower than 200
var booksPrice = [180, 150, 130, 80, 250, 300, 400, 450];
for (let i = 0; i < booksPrice.length; i++) {
   if (booksPrice[i] >= 200) {
      break;
  }
  console.log(booksPrice[i]);
}
