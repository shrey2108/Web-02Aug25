// mouse events and keyboard events

const btn = document.querySelector("button");
const div = document.querySelector("div");

console.dir(btn)
// btn.onclick = function(){
//   console.log("clicked!!")
// };

// btn.onclick = function(){
//   console.log("Hello from new fun")
// }


// event handler function
btn.addEventListener("click", (e) => {
  console.log(e.target)
  console.log("Clicked!")
})

// btn.addEventListener("click", () => {
//   console.log("clicked again!")
// })

btn.addEventListener("dblclick", (e) => {
  console.log("double clicked")
})


// div.addEventListener("mouseenter", () => {
//   console.log("entered")
// })

// div.addEventListener("mouseleave", () => {
//   console.log("left")
// })