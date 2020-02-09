const GroupPost = require("../models/GroupPost");
const GroupPostComment = require("../models/GroupPostComment");

const GroupPostCommentController = {
  create: (req, res, next) => {
    console.log(`GroupPostComment create`);
    console.log(`groupPostId is ${req.body.groupPostId}`);
    const groupPostId = req.body.groupPostId;
    let newGroupPostComment;
    const groupPostComment = {
      date: new Date(),
      groupPostId,
      content: req.body.content
    };
    GroupPostComment.create(groupPostComment)
      .then(groupPostComment => {
        newGroupPostComment = groupPostComment;
        return GroupPost.findByIdAndUpdate(groupPostId, {
          $push: { comments: newGroupPostComment._id }
        });
      })
      .then(() => res.send(newGroupPostComment))
      .catch(next);
  },
  fetch: (req, res, next) => {
    console.log(`group post commment route`);
    console.log(`groupPostId is ${req.query.groupPostId}`);
    const groupPostId = req.query.groupPostId;
    GroupPostComment.find({ groupPostId })
      .then(groupPostComments => res.send(groupPostComments))
      .catch(next);
  },
  edit: (req, res, next) => {},
  delete: (req, res, next) => {}
};

module.exports = GroupPostCommentController;
