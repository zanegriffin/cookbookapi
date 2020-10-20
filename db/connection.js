require("dotenv").config()
const mongoose = require('mongoose')
const { MONGODBURI } = process.env;
const config = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(MONGODBURI, config)
const DB = mongoose.connection;
mongoose.Promise = Promise
DB.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose
