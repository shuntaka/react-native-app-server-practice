const GroupPost = require("../models/GroupPost");
const GroupPostController = {
  create: (req, res, next) => {
    const groupPost = {
      date: new Date(),
      title: req.body.title,
      content: req.body.content,
      imageUrls: req.body.imageUrls,
      group: req.body.group
    };
    GroupPost.create(groupPost)
      .then(groupPost => {
        res.send(groupPost);
      })
      .catch(next);
  },
  fetch: (req, res, next) => {
    const groupId = req.query.groupId;
    GroupPost.find({ group: groupId })
      .then(groupPosts => res.send(groupPosts))
      .catch(next);
  },
  edit: (req, res, next) => {
    const groupPostId = req.params.id;
    GroupPost.findByIdAndUpdate(groupPostId, {
      title: req.body.title,
      content: req.body.content
    })
      .then(groupPost => res.send(groupPost))
      .catch(next);
  },
  delete: (req, res, next) => {
    const groupPostId = req.params.id;
    GroupPost.findByIdAndDelete(groupPostId)
      .then(groupPost => res.send(groupPost))
      .catch(next);
  }
};
module.exports = GroupPostController;
