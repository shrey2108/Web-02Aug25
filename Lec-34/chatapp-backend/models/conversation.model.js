const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  userIds: [{
    type: mongoose.Types.ObjectId,
    ref: "User"
  }],
  createdAt: Date,
  updatedAt: Date,  
});

module.exports = mongoose.model("Conversation", conversationSchema);