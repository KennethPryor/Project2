// var db = require("../models");
// var express = require("express");
// var app = express();
// var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile("index.html", { root: "views" });
  });

  app.get("/playlist", function(req, res) {
    res.sendFile("playlist.html", { root: "views" });
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
