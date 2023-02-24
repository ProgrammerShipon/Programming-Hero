const loadQuote = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quotes) => {
  const blockQuote = document.getElementById("quote");

  blockQuote.innerHTML = quotes.quote;

  // Destructure way
  //   const { quote } = quotes;
  //   blockQuote.innerHTML = quote;
};

loadQuote();
