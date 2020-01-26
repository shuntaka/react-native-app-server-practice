const Blog = require("../models/Blog");
const blogController = {
  index(req, res, next) {
    console.log("get route hit");
    Blog.find({})
      .then(blogs => {
        res.send(blogs);
      })
      .catch(next);
  },
  create(req, res, next) {
    console.log("post route hit");
    const blogProps = req.body;
    const date = new Date();
    Blog.create({ ...blogProps, date })
      .then(blog => res.send(blog))
      .catch(next);
  },
  edit(req, res, next) {
    console.log("edit route hit");

    const blogId = req.params.id;
    const blogProps = req.body;
    Blog.findByIdAndUpdate({ _id: blogId }, blogProps)
      .then(blog => res.send(blog))
      .catch(next);
  },
  delete(req, res, next) {
    console.log("delete route hit");
    const blogId = req.params.id;
    Blog.findByIdAndRemove({ _id: blogId })
      .then(blog => res.send(blog))
      .catch(next);
  }
};

module.exports = blogController;
