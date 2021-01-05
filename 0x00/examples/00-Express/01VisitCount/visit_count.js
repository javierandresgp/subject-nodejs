"use stric";
const express = require("express"),
  app = express(),
  cookieParser = require("cookie-parser"),
  cookieSession = require("cookie-session");
app.use(cookieParser());
app.use(cookieSession({ secret: "secreto" }));
app.get("/", (req, res) => {
  res.send(`<h1>Hello, World!; from Express-Visit count</h1>`);
});
app.listen(3000);
console.log("Server running in localhost, port 3000");
