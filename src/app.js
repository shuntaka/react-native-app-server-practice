const routes = require("./routes/routes");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const httpServer = http.createServer(app);
const mongoUri = process.env.MONGO || "mongodb://localhost:27017/nursery";

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

module.exports = httpServer;
