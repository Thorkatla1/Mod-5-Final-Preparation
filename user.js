const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id")
console.log("id from localStorage:", id)

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);
  console.log(id)
}

async function renderPosts(id) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const postsData = await posts.json();
  postListEl.innerHTML = postsData.map(post => postHTML(post)).join("");
}

function postHTML(post) {
  return`<div class="post">
        <div class="post__title">
           ${post.title}
        </div>
        <p class="post__body">
            ${post.body}
        </p>
    </div>
    `
}

renderPosts(id);


// event needs to be called 'event' or it won't work
// first mount = when page loads
// total explanation on 27:32
