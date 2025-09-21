
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelector(".grand-child");

// capture value
parent.addEventListener("click", (e) => {
  console.log("Parent Elem");
}, false)

child.addEventListener("click", (e) => {
  console.log("child Elem");
}, false)

grandChild.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Grand child Elem");
}, false)