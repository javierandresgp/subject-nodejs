"use stric";
const express = require("express"),
  router = express.Router();
router.get("/", (req, res) => {
  res.end("<h1>Hello, World!; from first App on Express</h1>");
});
module.exports = router;
