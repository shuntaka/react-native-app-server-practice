const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupPostSchema = new Schema({
  date: Date,
  content: String,
  image: Buffer,
  group: {
    type: Schema.Types.ObjectId,
    ref: "group"
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }]
});

const GroupPost =
  mongoose.models.grouppost || mongoose.model("grouppost", GroupPostSchema);

module.exports = GroupPost;
