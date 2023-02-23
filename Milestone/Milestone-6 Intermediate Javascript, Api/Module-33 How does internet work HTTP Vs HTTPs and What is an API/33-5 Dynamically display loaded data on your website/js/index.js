function loadUser() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(users) {
  console.log(users);
  const ul = document.getElementById("user-list");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
