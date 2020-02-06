const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GroupSchema = Schema.create({
  groupName: String
});

const Group = mongoose.models.group || mongoose.model("group", GroupSchema);
