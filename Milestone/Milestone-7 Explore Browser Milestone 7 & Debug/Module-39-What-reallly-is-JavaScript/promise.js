const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    resolve(23453);
  } else {
    reject("No data available");
  }
});

console.log(getData);
getData
  .then((data) => console.log(data + 5948))
  .catch((err) => console.error("ERR", err));
