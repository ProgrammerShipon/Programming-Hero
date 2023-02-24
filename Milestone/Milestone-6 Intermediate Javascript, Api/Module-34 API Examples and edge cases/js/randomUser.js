const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (users) => {
  const user = users.results[0];

  const userImage = document.getElementById("user-image");
  userImage.innerHTML = `<img src="${user.picture.medium}" >`;

  const genderTag = document.getElementById("gender");
  genderTag.innerHTML = user.gender;

  const name = user.name.title + " " + user.name.first + " " + user.name.last;
  document.getElementById("name").innerHTML = name;

  const location = document.getElementById("location");
  location.innerHTML = user.location.city + ", " + user.location.country;
};

loadUser();
