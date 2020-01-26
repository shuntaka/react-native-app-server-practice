const mongoose = require("mongoose");
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");
const commentController = {
  create(req, res, next) {
    const commentProps = req.body;
    const blogId = commentProps.blog;
    let comment;

    const date = new Date();
    Comment.create({ ...commentProps, date })
      .then(newComment => {
        comment = newComment;
        return Blog.findByIdAndUpdate(
          { _id: blogId },
          { $push: { comments: comment } }
        );
      })
      .then(() => res.send(comment))
      .catch(next);
  },
  // index(req, res, next) {
  //   Comment.find({})
  //     .then(comments => res.send(comments))
  //     .catch(next);
  // },
  fetchBlogPostComments(req, res, next) {
    const blogId = req.query.blogId;
    if (blogId) {
      Comment.find({ blog: blogId })
        .then(comments => res.send(comments))
        .catch(next);
    } else {
      Comment.find({})
        .then(comments => res.send(comments))
        .catch(next);
    }
  },
  edit(req, res, next) {
    const commentId = req.params.id;
    const commentProps = req.body;
    console.log("edit route hit");
    Comment.findByIdAndUpdate(
      {
        _id: commentId
      },
      commentProps
    )
      .then(comment => res.send(comment))
      .catch(next);
  },
  delete(req, res, next) {
    const commentId = req.params.id;
    Comment.findByIdAndRemove({ _id: commentId })
      .then(comment => res.send(comment))
      .catch(next);
  }
};

module.exports = commentController;
