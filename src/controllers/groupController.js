const Group = require("../models/Group");
const GroupController = {
  create: (req, res, next) => {
    const group = {
      groupName: req.body.groupName
    };
    Group.create(group)
      .then(group => {
        res.send(group);
      })
      .catch(next);
  },

  fetchGroups: (req, res, next) => {
    const groups = Group.find({});
    res.send(groups);
  }
};

module.exports = GroupController;
