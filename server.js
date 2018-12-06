// require("dotenv").config();
// var keys = require('./keys');
// var Spotify = require('node-spotify-api');

// var spotify = new Spotify({
//   id: keys.spotify.id,
//   secret: keys.spotify.secret
// });
// if (process.argv[2] == 'spotify-this-song') {

//   var songName = process.argv.slice(3).join(" ");

//   spotifyThisSong(songName);
//   console.log('-----------------------------------------------------------');
//   if (!songName) {
//     songName = "The Sign";
//   }

//   spotify.search({ type: 'track', query: songName, limit: 10 }, function (err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }

//     // console.log(data.tracks);
//     for (var i = 0; i < data.tracks.items.length; i++) {
//       // var result = {
//       console.log('artist: ' + data.tracks.items[i].album.artists[0].name + '\n',
//         'album_name: ' + data.tracks.items[i].album.name + '\n',
//         'song_name: ' + data.tracks.items[i].name + '\n',
//         'preview_url: ' + data.tracks.items[i].preview_url + '\n');
//     }
//   });

//   function spotifyThisSong(songName) {
//     // var songName = process.argv.slice(3).join(" ");

//     if (!songName) {
//       songName = "The Sign";
//     }
//     console.log(songName);

//     spotify.search({ type: 'track', query: songName, limit: 10 }, function (err, data) {
//       if (err) {
//         return console.log('Error occurred: ' + err);
//       }

//       // console.log(data.tracks);
//       for (var i = 0; i < data.tracks.items.length; i++) {
//         console.log('artist: ' + data.tracks.items[i].album.artists[0].name,
//           'album_name: ' + data.tracks.items[i].album.name,
//           'song_name: ' + data.tracks.items[i].name,
//           'preview_url: ' + data.tracks.items[i].preview_url);
//       }
//     }
//   );
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'd5a2c10d50e94b52acad7dd19f28884a',
  clientSecret: 'b78c43f5abce411a8e939a25951ad597',
  // redirectUri: 'http://www.example.com/callback'
});

// spotifyApi.setAccessToken('<your_access_token>');

  // Get a user's playlists
spotifyApi.getUserPlaylists('dangerfaz')
.then(function(data) {
  console.log('Retrieved playlists', data.body);
},function(err) {
  console.log('Something went wrong!', err);
});
