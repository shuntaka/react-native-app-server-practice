const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  date: Date,
  numberOfAttendee: Number,
  nurseAttendance: Boolean
});

const Schedule =
  mongoose.models.schedule || mongoose.model("schedule", ScheduleSchema);

module.exports = Schedule;
