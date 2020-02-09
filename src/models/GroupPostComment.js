const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupPostCommentSchema = new Schema({
  date: Date,
  groupPostId: {
    type: Schema.Types.ObjectId,
    ref: "grouppost"
  },
  content: String
});

const GroupPostComment =
  mongoose.models.grouppostcomments ||
  mongoose.model("grouppostcomment", GroupPostCommentSchema);

module.exports = GroupPostComment;
