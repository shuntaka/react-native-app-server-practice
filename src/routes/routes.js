const multer = require("multer");
const BlogController = require("../controllers/blogController");
const CommentController = require("../controllers/commentController");
const ScheduleController = require("../controllers/scheduleController");
const GroupController = require("../controllers/groupController");
const GroupPostController = require("../controllers/groupPostController");
const GroupPostImageController = require("../controllers/groupPostImageController");
const GroupPostCommentController = require("../controllers/GroupPostCommentController");
const QuestionsController = require("../controllers/QuestionsController");
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

  const uploadGroupImage = multer({});
  // group images
  app.post(
    "/groups/:id/groupImages",
    (req, res, next) => {
      console.log("upload image hit");
      next();
    },
    uploadGroupImage.single("groupImage"),
    GroupController.uploadImage
  );

  app.get("/groups/:id/groupImages", GroupController.getImage);

  // group post route
  app.post("/groups/:groupId/posts", GroupPostController.create);
  app.get("/groupPosts", GroupPostController.fetch);
  app.put("/groupPosts/:id", GroupPostController.edit);
  app.delete("/groupPosts/:id", GroupPostController.delete);

  // group post image route
  const uploadPostImage = multer({});
  app.post(
    "/groups/:groupId/posts/:postId/images",
    (req, res, next) => {
      console.log("group post image");
      next();
    },
    uploadPostImage.single("image"),
    GroupPostImageController.create
  );

  app.get(
    "/groups/:groupId/posts/:postId/images",
    GroupPostImageController.fetch
  );
  //group post comments route
  app.post("/groupPostComment", GroupPostCommentController.create);
  app.get("/groupPostComment", GroupPostCommentController.fetch);
  app.put("/groupPostComment", GroupPostCommentController.edit);
  app.delete("/groupPostComment", GroupPostCommentController.delete);

  app.post("/questions", QuestionsController.create);
  app.get("/questions", QuestionsController.index);
  app.get("/questions/:questionId", QuestionsController.fetch);
};

module.exports = routes;
