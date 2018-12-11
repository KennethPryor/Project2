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
  "BQCTt58D51dm7cyLRzsoxQWqaAx4vOLFZsYOS4aZIV9j8UjEfIsfhKbx829e8gKa538KmUJvokQLN7xSDW8"
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
