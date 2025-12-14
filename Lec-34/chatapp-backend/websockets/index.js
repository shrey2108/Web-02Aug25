const { sendMessage } = require("./helpers");

function chat(io) {
  io.on("connection", (socket) => {
    const userId = socket.user.id;
    socket.join(userId);

    socket.on("message:send", (data) => {
      console.log(typeof io, userId, data)
      sendMessage({io, userId, data});
    })

  })
}

module.exports = chat;