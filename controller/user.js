const form = require("../models/form.js");

async function submitForm(req, res) {
  console.log(req.body);

  try {
    const newForm = await form.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(201).json({ message: "Successfully added!" });
  } catch (error) {
    console.log("This is error", error);
    res.status(500).json({ message: "Some error occured" });
  }
}

module.exports = { submitForm };
