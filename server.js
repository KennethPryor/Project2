// var Spotify = require("spotify-web-api-js");
var SpotifyWebApi = require("spotify-web-api-node");
// var s = new Spotify();

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "27d191e4109347f3ad1f53b95e56f647",
  clientSecret: "dc417de46b2747ab920ff5bfe7df6b60",
  redirectUri: "http://www.spotify.com/callback"
});

// spotifyApi.setAccessToken('BQC1kKWP9OldK4W0Ixjw0A6T0RGd253GqeTkLS2Z3');

// GET https://api.spotify.com/v1/playlists/1QE6kfCWAhDqOYrP2mue9i
// spotify:user:dangerfaz:playlist:1QE6kfCWAhDqOYrP2mue9i
// spotify:user:dangerfaz:playlist:1QE6kfCWAhDqOYrP2mue9i

// Get a  playlists

spotifyApi.getPlaylist("1QE6kfCWAhDqOYrP2mue9i").then(
  function(data) {
    console.log("Some information about this playlist", data.body);
  },
  function(err) {
    console.log("Something went wrong!", err);
  }
);
