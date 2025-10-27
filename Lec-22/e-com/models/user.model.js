const mongoose = require("mongoose");
// authentication and authorization (later)

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    enum: ["buyer", "seller"],
    required: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }

  // createdAt: timestamp
  // updatedAt: timestamp
}, {
  timestamps: true
})

const User = mongoose.model("User", userSchema);
module.exports = User;