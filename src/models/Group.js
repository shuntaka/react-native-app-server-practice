const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  groupName: {
    type: String,
    unique: true
  },
  groupImage: Buffer,
  hasGroupImage: Boolean
});

GroupSchema.plugin(uniqueValidator);
const Group = mongoose.models.group || mongoose.model("group", GroupSchema);
module.exports = Group;
