const EVENTS = require("./events");
const { sendMessage } = require("./helpers");

function chat(io) {
  io.on("connection", (socket) => {
    const userId = socket.user.id;
    socket.join(userId);

    // socket.on(EVENTS.MESSAGE_SEND, (data) => {
    //   console.log(typeof io, userId, data)
    //   sendMessage({io, userId, data});
    // })

  })
}

module.exports = chat;