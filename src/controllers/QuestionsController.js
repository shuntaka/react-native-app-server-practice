const Question = require("../models/Question");

const QuestionsController = {
  create: async (req, res) => {
    const question = await Question.create(req.body);
    res.send(question);
  },
  index: async (req, res) => {
    console.log("fetch question");
    const questions = await Question.find({});
    res.send(questions);
  },
  fetch: async (req, res) => {
    const question = await Question.findById(req.params.questionId);
    res.send(question);
  }
};

module.exports = QuestionsController;
