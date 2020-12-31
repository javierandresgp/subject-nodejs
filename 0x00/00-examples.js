"use strict";

const { EventEmitter } = require("events");

//console.log("Hello, World!");

/**
 * Core
 */

/* Globals */
//console.log(window);
//console.log(global);

/* Process */
/*
const singleThread = () => {
  console.info("--------------------------------");
  console.info("\tThe NODEJS Process");
  console.info("Process ID: " + process.pid);
  console.info("Title: " + process.title);
  console.info("Node Directory: " + process.execPath);
  console.info("Current Directory: " + process.cwd);
  console.info("Node version: " + process.version);
  console.info("Dependencies version: " + process.versions);
  console.info("Platform OS: " + process.platform);
  console.info("Architecture OS: " + process.arch);
  console.info("Node Uptime: " + process.uptime);
  console.info("Process Arguments: " + process.argv);
  console.info("--------------------------------");
};
singleThread();
*/

/* HTTP */
/*
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
server.listen(port, hostname, () =>
  console.info(`Server running at http://$hostname}:${port}/`)
);
*/

/* Buffer */
/*
const buf = new Buffer(26);
for (let i = 0; i < buf.length; i++) {
  buf[i] = i + 97;
}
console.info(buf.toString("ascii"));
*/

/* Stream with File System*/
/*
const fs = require("fs"),
  readStream = fs.createReadStream("assets/names.txt"),
  writeStream = fs.createWriteStream("assets/names_copy.txt");
readStream.pipe(writeStream);
readStream.on("data", function (chunk) {
  console.info("I have read: ", chunk.length, "characters.");
});
readStream.on("end", function () {
  console.info("I finished reading the file.");
});
*/

/* Events */
const eventEmitter = require("events").EventEmitter,
  pub = new EventEmitter();
pub.on("myevent", function (message) {
  console.info(message);
});
pub.once("myevent", function (message) {
  console.info("Is issued the first time " + message);
});
pub.emit("myevent", "I'm an event broadcaster.");
pub.emit("myevent", "Again.");
