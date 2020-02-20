const GroupPost = require("../models/GroupPost");
const multer = require("multer");
const upload = multer({});

const groupPostImageController = {
  create: async (req, res, next) => {
    console.log("uploadImage");
    console.log(req.params.postId);
    const resizedImage = await sharp(req.file.buffer)
      .resize({ width: 400, height: 400 })
      .png()
      .toBuffer();
    const groupPost = await GroupPost.findByIdAndUpdate(req.params.postId, {
      image: resizedImage
    });
    res.send(groupPost);
  },
  fetch: async (req, res, next) => {
    const groupPost = await GroupPost.findById(req.params.postId);
    res.setHeader("Content-Type", "image/png");
    res.send(groupPost.image);
  }
};
module.exports = groupPostImageController;
