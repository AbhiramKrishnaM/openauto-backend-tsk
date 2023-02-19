function submitForm(req, res) {
  console.log(req.body);

  res.send("Hey recieved the body");
}

module.exports = { submitForm };
