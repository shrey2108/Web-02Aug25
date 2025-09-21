const parent = document.querySelector(".parent");

parent.addEventListener("click", (e) => {
  if(e.target.classList.contains("parent")) return;
  
  e.target.remove();
});
