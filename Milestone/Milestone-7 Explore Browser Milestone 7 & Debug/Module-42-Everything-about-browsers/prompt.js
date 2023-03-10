const alertMe = () => {
  alert("Dosto, taka ase kichu dhar dite parbi");
};

const lendMoney = () => {
  const result = confirm("Will you lend me 500 Taka?");
  if (result) {
    alert("Tui amar jan er dosto");
  } else {
    console.log("DGM..... toke ajke e block maira dimu.");
  }
  console.log(result);
};

const getInfo = () => {
  const name = prompt("Tell me your name");
  console.log(name);

  if (name === null) {
    alert("Naam na dile kaam nai !!! Ja fooot");
  } else {
    console.log(name, "Welcome to this world!!! ");
  }
};
