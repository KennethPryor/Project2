/* eslint-disable linebreak-style */
require("dotenv").config();
var express = require("express");
var app = express();
// var path = require("path");

// var db = require("./models");

var PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./modals");

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.listen(PORT, function() {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
module.exports = app;
var SpotifyWebApi = require("spotify-web-api-node");
/**
 * This example retrives an access token using the Client Credentials Flow. It's well documented here:
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */
/*
 * https://developer.spotify.com/spotify-web-api/using-scopes/
 */
/**
 * Set the credentials given on Spotify's My Applications page.
 * https://developer.spotify.com/my-applications
 */
var spotifyApi = new SpotifyWebApi({
  clientId: "27d191e4109347f3ad1f53b95e56f647",
  clientSecret: "dc417de46b2747ab920ff5bfe7df6b60"
});
// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    console.log("The access token expires in " + data.body.expires_in);
    console.log("The access token is " + data.body.access_token);
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body.access_token);
    spotifyApi.getPlaylist("1QE6kfCWAhDqOYrP2mue9i").then(
      function(data) {
        console.log("Some information about this playlist", data.body);
      },
      function(err) {
        console.log("Something went wrong!", err);
      }
    );
  },
  function(err) {
    console.log(
      "Something went wrong when retrieving an access token",
      err.message
    );
  }
);
// var Spotify = require("spotify-web-api-js");
var SpotifyWebApi = require("spotify-web-api-node");
// var s = new Spotify();

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "27d191e4109347f3ad1f53b95e56f647",
  clientSecret: "dc417de46b2747ab920ff5bfe7df6b60",
  redirectUri: "http://localhost:8888/callback"
});

spotifyApi.setAccessToken(
  "BQD7ZBZ0F4weNZ7_hckYuXQgObQC_kpQ936_JXMXODY1wZ2rVcPc4r8zhkE27kPzuDZQARZi_H_XLHeuMJY"
);

// GET https://api.spotify.com/v1/playlists/1QE6kfCWAhDqOYrP2mue9i
// spotify:user:dangerfaz:playlist:1QE6kfCWAhDqOYrP2mue9i
// spotify:user:dangerfaz:playlist:1QE6kfCWAhDqOYrP2mue9i

// Get a playlist

spotifyApi.getPlaylist("1QE6kfCWAhDqOYrP2mue9i").then(
  function(data) {
    console.log("Some information about this playlist", data.body);
  },
  function(err) {
    console.log("Something went wrong!", err);
  }
);

console.log(
  "When you have tough times, and when you learn you can't be perfect in every situation, it's hard to accept, you know, because I still do expect that. But you just have to, because, you know, it's not about the situation. It's how you deal with it. You always have a choice. -Ana Ivanovic"
);
