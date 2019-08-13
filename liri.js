require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");
//var spotify = require("spotify");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];

//var getSpotify = function () {


 var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
});
   
//   spotify.search ({ type: 'track', query: 'All the Small Things'}, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//   console.log(data); 
//   });

//   let artist = data.tracks.items[i].album.artists[0].name; 
//   console.log(artist);
//}

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });