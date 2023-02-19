const form = require("../models/form.js");

async function submitForm(req, res) {
  console.log(req.body);

  try {
    const newForm = await form.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(201).json(newForm);
  } catch (error) {
    console.log("Error message", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { submitForm };
