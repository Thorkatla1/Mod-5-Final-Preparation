// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();

  const userListEl = document.querySelector(".user-list");
  userListEl.innerHTML = usersData  
    .map(
      (user) => `<div class="user-card">
    <div class="user-card__container">
    <h3>User's Name</h3>
    <p><b>Email:</b> email@email.com</p>
    <p><b>Phone:</b> 0000000000</p>
    <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
</div>
</div>`,
    )
    .join("");
}
main();
// 4.25