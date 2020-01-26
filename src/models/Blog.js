const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: String,
  content: String,
  date: Date,
  imageUrls: [String],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment"
    }
  ]
});

const Blog = mongoose.models.blog || mongoose.model("blog", BlogSchema);

module.exports = Blog;
