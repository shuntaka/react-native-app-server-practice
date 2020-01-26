const Schedule = require("../models/Schedule");
const scheduleController = {
  index(req, res, next) {
    Schedule.find({})
      .then(schedules => {
        res.send(schedules);
      })
      .catch(next);
  },
  create(req, res, next) {
    console.log("post route hit");
    const scheduleProps = req.body;
    Schedule.create(scheduleProps)
      .then(schedule => res.send(schedule))
      .catch(next);
  },
  fetchSchedules(req, res, next) {
    console.log("schedule fetchSchedules route hit");
    // get parameters string
    const begginDateString = req.query.begginDate;
    const endDateString = req.query.endDate;

    // decode parameter
    const begginDate = new Date(begginDateString);
    const endDate = new Date(endDateString);

    // use parameters
    if (begginDate && endDate) {
      Schedule.find({
        date: { $gte: begginDate, $lte: endDate }
      }).then(schedules => res.send(schedules));
    } else {
      Schedule.find({}).then(schedules => res.send(schedules));
    }
  },
  edit(req, res, next) {
    const scheduleId = req.params.id;
    const scheduleProps = req.body;
    console.log("edit route hit");
    Schedule.findByIdAndUpdate(
      {
        _id: scheduleId
      },
      scheduleProps
    )
      .then(schedule => res.send(schedule))
      .catch(next);
  },
  modifyNumberOfAttendee(req, res, next) {
    console.log("modify number of attendee route hit");
    const scheduleId = req.params.id;
    const diffString = req.body.numberOfAttendeeDiff;
    const diff = parseInt(diffString);
    Schedule.findByIdAndUpdate(
      {
        _id: scheduleId
      },
      { $inc: { numberOfAttendee: diff } }
    )
      .then(schedule => res.send(schedule))
      .catch(next);
  },
  modifyNurseAttendance(req, res, next) {
    const scheduleId = req.params.id;
    const nurseAttendanceString = req.body.nurseAttendance;
    const nurseAttendance = JSON.parse(nurseAttendanceString);
    Schedule.findByIdAndUpdate(
      { _id: scheduleId },
      { nurseAttendance }
    ).then(schedule => res.send(schedule));
    console.log("modify nurse attendance route hit");
  },
  delete(req, res, next) {
    const scheduleId = req.params.id;
    Schedule.findByIdAndRemove({ _id: scheduleId })
      .then(schedule => res.send(schedule))
      .catch(next);
  }
};
module.exports = scheduleController;
