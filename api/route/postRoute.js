const express = require("express");
const api = express.Router();
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const Post = require("./../mongodb/model/postModel");
const jwt = require("jsonwebtoken");

const secret = "tusharnagartusharnagar";

// GET /post
api.get("/post", async (req, res) => {
  const posts = await Post.find()
    .populate("author", ["username"])
    .sort({ createdAt: -1 });
  res.status(200).json(posts);
});

api.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;

  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  console.log("req cookies token", req.cookies.token);
  const { token } = req.cookies;
  const info = jwt.verify(token, secret);

  const { title, summary, content } = req.body;

  const postDoc = await Post.create({
    title,
    summary,
    content,
    cover: newPath,
    author: info.id,
  });

  res.status(200).json({ message: "Successfully Created Post" });
  // //   });
});

api.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.status(200).json(postDoc);
});

module.exports = api;
