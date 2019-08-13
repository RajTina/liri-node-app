require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");
var moment = require("moment");
var fs = require("fs");
var spotify = require("spotify");
var spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];

//var getSpotify = ffunction () {

//}
var spotify = new Spotify({
     id: 'process.env.SPOTIFY_3635a242b1d340ec92a859b568e14fid',
     secret:'process.env.SPOTIFY_3c5f2ab41cb44cd7acd3686de1f67127'
   });
   
  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });