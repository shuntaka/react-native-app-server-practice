const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({ question: String, answer: String });

const Question =
  mongoose.models.question || mongoose.model("question", QuestionSchema);

module.exports = Question;
