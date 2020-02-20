const sharp = require("sharp");
const GroupPost = require("../models/GroupPost");

const GroupPostController = {
  create: async (req, res, next) => {
    console.log("create group post");
    console.log(req.params.groupId);
    console.log(req.body.content);

    try {
      const groupPost = await GroupPost.create({
        date: new Date(),
        title: req.body.title,
        content: req.body.content,
        group: req.params.groupId
      });
      res.send(groupPost);
    } catch (error) {
      next(error);
    }
    // .then(groupPost => {
    //   res.send(groupPost);
    // })
    // .catch(next);
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
  // group post image
  // uploadImage: async (req, res, next) => {
  //   console.log("uploadImage");
  //   console.log(req.params.postId);
  //   const resizedImage = await sharp(req.file.buffer)
  //     .resize({ width: 400, height: 400 })
  //     .png()
  //     .toBuffer();
  //   const groupPost = await GroupPost.findByIdAndUpdate(req.params.postId, {
  //     image: resizedImage
  //   });
  //   res.send(groupPost);
  // },
  // getImage: async (req, res, next) => {
  //   const groupPost = await GroupPost.findById(req.params.postId);
  //   res.setHeader("Content-Type", "image/png");
  //   res.send(groupPost.image);
  // }
};
module.exports = GroupPostController;
