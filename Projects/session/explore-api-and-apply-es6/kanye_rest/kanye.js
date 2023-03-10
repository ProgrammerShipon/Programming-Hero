function loadData() {
  const url = `https://api.kanye.rest`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("showData").innerText = data.quote;
    });
}

loadData();
