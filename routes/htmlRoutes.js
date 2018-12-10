// var db = require("../models");
// var express = require("express");
// var app = express();
// var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile("../views/index.html");
  });

  app.get("/playlist", function(req, res) {
    res.sendFile("../views/logIn.html");
  });

  app.get("*", function(req, res) {
    res.render("404");
  });
};
