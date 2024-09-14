// const express = require("express");
// const app = express();

// app.set("view engine", "ejs");
// app.use(express.static("html"));

// app.listen(3000);

var http = require("http");
var static = require("node-static");
var file = new static.Server(".");

http
  .createServer(function (req, res) {
    file.serve(req, res);
  })
  .listen(8080);

console.log("Server running on port 8080");
