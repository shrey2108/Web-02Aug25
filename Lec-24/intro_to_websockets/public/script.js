const socket = io();

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  socket.emit("message", "Hi there!");
})

socket.on("message", (data) => {
  console.log(data)
})


