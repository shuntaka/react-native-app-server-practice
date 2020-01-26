const routes = require("./routes/routes");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const mongoUri =
  "mongodb+srv://shun:Sh696ouji3mAMoN@cluster0-fgiyc.mongodb.net/test?retryWrites=true&w=majority";
// const mongoUri = "mongodb://localhost:27017";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", err => {
  console.error("Error connecting to mongo", err);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
