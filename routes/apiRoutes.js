var db = require("../models");

module.exports = function(app) {
  // Create a new USER
  app.post("/api/login", function(req, res) {
    db.login.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
