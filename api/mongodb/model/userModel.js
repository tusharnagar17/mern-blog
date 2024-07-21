const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: { type: String, required: true, min: 3, unique: true },
  password: { type: String, required: true },
});

const UserSchema = mongoose.model("User", User);

module.exports = UserSchema;
