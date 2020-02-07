const Group = require("../models/Group");
const GroupController = {
  create: (req, res, next) => {
    const group = {
      groupName: req.body.groupName,
      groupColor: req.body.groupColor
    };
    Group.create(group)
      .then(group => {
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
  }
};

module.exports = GroupController;
