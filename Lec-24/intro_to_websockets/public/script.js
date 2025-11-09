const socket = io();

const btn = document.querySelector("button");

const notifications = [];

btn.addEventListener("click", () => {
  socket.emit("message", "Hi there!");
})

socket.on("message", (data) => {
  console.log(data)
})

socket.on("notification", (data) => {
  notifications.push(data)
})


