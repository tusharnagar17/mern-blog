const mongoose = require("mongoose");

const Post = new mongoose.Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PostSchema = mongoose.model("Post", Post);

module.exports = PostSchema;
