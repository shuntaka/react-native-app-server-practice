const BlogController = require("../controllers/blogController");
const CommentController = require("../controllers/commentController");
const ScheduleController = require("../controllers/scheduleController");
const GroupController = require("../controllers/groupController");
const GroupPostController = require("../controllers/groupPostController");
const GroupPostCommentController = require("../controllers/GroupPostCommentController");

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
  app.post("/groups", GroupController.create);
  app.get("/groups", GroupController.fetch);
  app.put("/groups/:id", GroupController.edit);
  app.delete("/groups/:id", GroupController.delete);

  // group post route
  app.post("/groupPosts", GroupPostController.create);
  app.get("/groupPosts", GroupPostController.fetch);
  app.put("/groupPosts/:id", GroupPostController.edit);
  app.delete("/groupPosts/:id", GroupPostController.delete);
  app.post("");
  //group post comments route
  app.post("/groupPostComment", GroupPostCommentController.create);
  app.get("/groupPostComment", GroupPostCommentController.fetch);
  app.put("/groupPostComment", GroupPostCommentController.edit);
  app.delete("/groupPostComment", GroupPostCommentController.delete);
};

module.exports = routes;
