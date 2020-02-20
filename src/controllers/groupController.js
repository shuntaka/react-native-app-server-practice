const Group = require("../models/Group");
const sharp = require("sharp");
const GroupController = {
  create: (req, res, next) => {
    console.log("create group");
    console.log(req.body);
    const group = {
      groupName: req.body.groupName,
      hasGroupImage: false
    };
    Group.create(group)
      .then(group => {
        console.log(group);
        res.send(group);
      })
      .catch(next);
  },

  fetch: (req, res, next) => {
    Group.find({})
      .then(groups => res.send(groups))
      .catch(next);
  },
  edit: (req, res, next) => {
    const groupId = req.params.id;
    Group.findByIdAndUpdate(groupId, {
      groupName: req.body.groupName,
      groupColor: req.body.groupColor
    })
      .then(group => res.send(group))
      .catch(next);
  },
  delete: (req, res, next) => {
    console.log("delete route");
    const groupId = req.params.id;

    Group.findByIdAndRemove(groupId)
      .then(group => {
        res.send(group);
      })
      .catch(next);
  },
  // group images
  uploadImage: async (req, res, next) => {
    const resizedImageBinary = await sharp(req.file.buffer)
      .resize({ width: 200, height: 200 })
      .png()
      .toBuffer();
    try {
      const group = await Group.findByIdAndUpdate(req.params.id, {
        groupImage: resizedImageBinary,
        hasGroupImage: true
      });

      res.send(group);
    } catch (error) {
      next(error);
    }
  },
  getImage: async (req, res, next) => {
    const group = await Group.findById(req.params.id);
    res.setHeader("Content-Type", "image/jpg");
    res.send(group.groupImage);
  }
};

module.exports = GroupController;
