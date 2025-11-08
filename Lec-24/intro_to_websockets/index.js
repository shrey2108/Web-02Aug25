// node
// express(90), fastify => nestjs (express | fastify)

const PORT = 8080;
const express = require("express");
const { createServer } = require("http");
const { Server: socketServer } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new socketServer(httpServer, {
  cors: {
    origin: "*"
  }
});

app.use(express.static("public"));

// on, emit
io.on("connection", (socket) => {
  console.log("User connected with", socket.id)

  socket.on("message", (data) => {
    console.log(data);
    socket.emit("message", data)
  })
})


app.get("/", (req, res) => {
  res.send("Working fine!");
})


httpServer.listen(PORT, () => {
  console.log("Server is up and running at port", PORT);
})
