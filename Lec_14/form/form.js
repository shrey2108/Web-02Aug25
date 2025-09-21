const usernameInp = document.getElementById("username");
const passwordInp = document.getElementById("password");
// const btn = document.querySelector("button");
const form = document.querySelector("form");

// btn.addEventListener("click", () => {
//   const username = usernameInp.value;
//   const password = passwordInp.value;

//   console.log("username", username)
//   console.log("password", password)
// })

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInp.value;
  const password = passwordInp.value;

  usernameInp.value = "";
  passwordInp.value = "";
  
  console.log("username", username);
  console.log("password", password);
});
