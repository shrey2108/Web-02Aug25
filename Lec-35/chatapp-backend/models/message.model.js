const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  from: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  to: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  content: {
    type: String,
    required: true
  },
  conversationId: {
    type: mongoose.Types.ObjectId,
    ref: "Conversation",
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Message", messageSchema);
