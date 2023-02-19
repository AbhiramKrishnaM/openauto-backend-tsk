const { submitForm } = require("../controller/user.js");

const express = require("express");

const router = express.Router();

router.post("/", submitForm);

module.exports = router;
