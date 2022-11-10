const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  usermail: {
    type: String,
  },
  userphone: {
    type: Number,
  },
  useraddress: {
    type: String,
  },
  usercity: {
    type: String,
  },
});

const Usermodel = mongoose.model("users", userSchema);
module.exports = Usermodel;
