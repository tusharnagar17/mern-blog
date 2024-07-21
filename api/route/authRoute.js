const express = require("express");
const api = express.Router();
const User = require("./../mongodb/model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const secret = "tusharnagartusharnagar";
// Store hash in your password DB.
// register
api.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const alreadyRegisterd = await User.findOne({ username });
  console.log(!alreadyRegisterd);
  if (alreadyRegisterd) {
    return res.status(200).json({ message: "User Already Registered!" });
  }

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });

    return res
      .status(200)
      .json({ message: "Successfully registerd Kindly Login!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

// login
api.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    const passOk = bcrypt.compareSync(password, user.password);

    if (passOk) {
      const token = jwt.sign({ username, id: user._id }, secret);
      res.cookie("token", token);

      res.status(200).json({ username, id: user._id });
    } else {
      return res.status(400).json({ message: "Failed to login" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// logout
api.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

// profile
api.get("/profile", (req, res) => {
  const { token } = req.cookies;
  console.log("Received token:", token); // Debugging line
  if (token) {
    try {
      const result = jwt.verify(token, secret);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "No Token" });
  }
});

module.exports = api;
