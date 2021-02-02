const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/", function (req, res) {
  res.json({ message: "Got a POST request" });
});

app.put("/user", function (req, res) {
  res.json({ message: "Got a PUT request at /user" });
});

app.delete("/user", function (req, res) {
  res.json({ message: "Got a DELETE request at /user" });
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
