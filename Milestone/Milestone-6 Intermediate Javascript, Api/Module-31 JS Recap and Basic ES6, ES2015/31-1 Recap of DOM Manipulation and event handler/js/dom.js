document.getElementById("apply-bg").addEventListener("click", function () {
  //   console.log("Apply Background");
  const friends = document.getElementsByClassName("friend");
  for (let friend of friends) {
    friend.style.background = "lightblue";
  }
});

document.getElementById("center-third").addEventListener("click", function () {
  const third = document.getElementById("third");
  third.style.textAlign = "center";
});

document
  .getElementById("add-new-friend")
  .addEventListener("click", function () {
    const friendContainer = document.getElementById("friends");
    const friend = document.createElement("div");
    friend.classList.add("friend");
    friend.innerHTML = `
         <h3 class="friend-name">New Friend</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      `;
    friendContainer.appendChild(friend);
  });
