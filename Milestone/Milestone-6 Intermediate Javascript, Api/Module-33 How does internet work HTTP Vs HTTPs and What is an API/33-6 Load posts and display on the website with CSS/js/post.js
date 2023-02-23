function loadPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

/**
 *  1. get the container element where you want to add the new elements
 * 2. create child element
 * 3. set innerText or innerHTML
 * 4. appendChild
 */
function displayPosts(posts) {
  const postContainer = document.getElementById("posts-container");
  for (const post of posts) {
    //  console.log(post);
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
      <h4> User - ${post.userId} </h4>
      <h5> Post:  ${post.title} </h5>
      <p>  ${post.body}  </p>
     `;

    postContainer.appendChild(div);
  }
}
loadPosts();
