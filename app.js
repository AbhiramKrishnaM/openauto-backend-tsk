require("dotenv").config();

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

// db init

const { startSequelize } = require("./config/db.js");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

startSequelize();

const port = process.env.APP_PORT || 4001;

app.listen(port, () => {
  console.log("Server running at port ", port);
});
