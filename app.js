require("dotenv").config();

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Server running at port ", port);
});
