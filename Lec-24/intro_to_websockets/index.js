// node
// express(90), fastify => nestjs (express | fastify)

const PORT = 8080;
const express = require("express");
const { createServer } = require("http");
const { Server: socketServer } = require("socket.io");
const socketEvents = require("./common/events");

const app = express();
const httpServer = createServer(app);
const io = new socketServer(httpServer, {
  cors: {
    origin: "*"
  }
});

app.use(express.static("public"));

app.post("/sendRequest", (req, res) => {
  // code 

  io.to(socketId).emit("notification", `${"Punnet"} sent you a friend request`);
})

// on, emit
io.on("connection", (socket) => {
  saveUserSocketId(socket.id)
  console.log("User connected with", socket.id);


  socket.on(socketEvents.MESSAGE, (data) => {
    console.log(data);
    socket.emit("message", data)
  })
})


function saveUserSocketId(id) {
  user.online = true
}

app.get("/", (req, res) => {
  res.send("Working fine!");
})


httpServer.listen(PORT, () => {
  console.log("Server is up and running at port", PORT);
})
