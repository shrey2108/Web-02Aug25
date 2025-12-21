const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema({
  participants: [{
    type: mongoose.Types.ObjectId,
    ref: "User"
  }]
},{
  timestamps: true
});

module.exports = mongoose.model("Conversation", conversationSchema);