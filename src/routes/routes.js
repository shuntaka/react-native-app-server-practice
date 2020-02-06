const BlogController = require("../controllers/blogController");
const CommentController = require("../controllers/commentController");
const ScheduleController = require("../controllers/scheduleController");

const routes = app => {
  //blog route
  app.post("/blogs", BlogController.create);
  app.get("/blogs", BlogController.index);
  app.put("/blogs/:id", BlogController.edit);
  app.delete("/blogs/:id", BlogController.delete);

  //comment route
  app.post("/comments", CommentController.create);
  app.get("/comments", CommentController.fetchBlogPostComments);
  app.put("/comments/:id", CommentController.edit);
  app.delete("/comments/:id", CommentController.delete);

  // schedule route
  app.post("/schedules", ScheduleController.create);
  app.get("/schedules", ScheduleController.fetchSchedules);
  app.put("/schedules/:id", ScheduleController.edit);
  app.patch(
    "/schedules/numberOfAttendee/:id",
    ScheduleController.modifyNumberOfAttendee
  );
  app.patch(
    "/schedules/nurseAttendance/:id",
    ScheduleController.modifyNurseAttendance
  );
  app.delete("/schedules/:id", ScheduleController.delete);

  // group route
  app.post("/groups", GroupController, create);
  app.get("/groups", GroupController.fetchGroups);
};

module.exports = routes;
