const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupPostSchema = new Schema({
  date: Date,
  title: String,
  content: String,
  imageUrls: [String],
  group: {
    type: Schema.Types.ObjectId,
    ref: "group"
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }]
});

const GroupPost =
  mongoose.models.grouppost || mongoose.model("grouppost", GroupPostSchema);

module.exports = GroupPost;
