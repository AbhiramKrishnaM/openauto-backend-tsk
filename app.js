require("dotenv").config();

// route imports
const user = require("./router/user.js");

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

// db init
const { startSequelize } = require("./config/db.js");

// use body parser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// initializing PG module
startSequelize();

app.use("/submit", user);

const port = process.env.APP_PORT || 4001;

app.listen(port, () => {
  console.log("Server running at port ", port);
});
