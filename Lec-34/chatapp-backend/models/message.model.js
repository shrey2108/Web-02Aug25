const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  from: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  to: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  content: {
    type: String,
    required: true
  },
  conversationId: {
    type: mongoose.Types.ObjectId,
    ref: "Conversation"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Message", messageSchema);
