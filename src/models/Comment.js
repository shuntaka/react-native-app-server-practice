const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  date: Date,
  content: String,
  blog: {
    type: Schema.Types.ObjectId,
    ref: "blog"
  }
});

const Comment =
  mongoose.models.comment || mongoose.model("comment", CommentSchema);
module.exports = Comment;
