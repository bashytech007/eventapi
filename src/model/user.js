const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
  },
  userType: {
    type: String,
    default: "user",
    enum: ["user","admin"],
  },
});


const User = mongoose.model("user", userSchema);

module.exports = User;
