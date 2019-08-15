require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");
//var spotify = require("spotify");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// var omdb = (keys.omdb)
// var bandsintown = (keys.bandsintown)
var command = process.argv[2];
var input = process.argv[3];
//.join(" ");

if(command == "concert-this"){
  var bisURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
  request(bisURL, function(error, response, body){
      if (!error && response.statusCode === 200) {
          var output = JSON.parse(body);
          for(i=0; i<output.length; i++){
              console.log("Venue: " + output[i].venue.name);
              console.log("Location: " + output[i].venue.city + ", " + output[i].venue.region);
              console.log("Date: " + moment(output[i].datetime).format("MM/DD/YYYY"));
              console.log(" ");
          }
      }
  })
}

else if(command == "spotify-this-song"){
  if(input === undefined){
      console.log("Artist: Ace of Base");
      console.log("Song name: The Sign");
      console.log("Spotify link: https://open.spotify.com/track/3DYVWvPh3kGwPasp7yjahc?autoplay=true&v=T");
      console.log("Album: Happy Nation");
  }
  else{
      spotify.search({ type: "track", query: input})
      .then(function(response){
          var output = response.tracks.items;
          for(i=0;i<output.length;i++){
              var artists = output[i].artists;
              for(j=0;j<artists.length;j++){
                  console.log("Artist: " + artists[j].name);
              }
              console.log("Song name: " + output[i].name);
              console.log("Spotify link: " + output[i].external_urls.spotify);
              console.log("Album: " + output[i].album.name);
              console.log(" ");
          }
      })
      .catch(function(err){
          console.log(err);
      })
  }
}

else if(command == "movie-this"){
  if(input === undefined){
      console.log("Title: Mr. Nobody");
      console.log("The movie was made in: 2009");
      console.log("IMDB Rating: 7.9");
      console.log("Rotten Tomatoes Rating: 67%");
      console.log("Produced in: Belgium");
      console.log("Languages: English");
      console.log("Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.");
      console.log("Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham, Rhys Ifans, Natasha Little");
  }
  else{
      var omdbURL = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
      request(omdbURL, function(error, response, body){

          if (!error && response.statusCode === 200) {
              console.log("Title: " + JSON.parse(body).Title);
              console.log("The movie was made in: " + JSON.parse(body).Year);
              console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
              var ratings = JSON.parse(body).Ratings;
              for(i=0;i<ratings.length;i++){
                  if(ratings[i].Source == "Rotten Tomatoes"){
                      console.log("Rotten Tomatoes Rating: " + ratings[i].Value);
                  }
              }
              console.log("Produced in: " + JSON.parse(body).Country);
              console.log("Languages: " + JSON.parse(body).Language);
              console.log("Plot: " + JSON.parse(body).Plot);
              console.log("Actors: " + JSON.parse(body).Actors);
          }
      
      })
  }
}

else if(command == "do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(error, data){
      
      if(error){
          return console.log(error);
      }

      var dataArr = data.split(",");

      if(dataArr[0] == "concert-this"){
          var bisURL = "https://rest.bandsintown.com/artists/" + dataArr[1] + "/events?app_id=codingbootcamp";
          request(bisURL, function(error, response, body){
              if (!error && response.statusCode === 200) {
                  var output = JSON.parse(body);
                  for(i=0; i<output.length; i++){
                      console.log("Venue: " + output[i].venue.name);
                      console.log("Location: " + output[i].venue.city + ", " + output[i].venue.region);
                      console.log("Date: " + moment(output[i].datetime).format("MM/DD/YYYY"));
                      console.log(" ");
                  }
              }
          })
      }
      
      else if(dataArr[0] == "spotify-this-song"){
          if(dataArr[1] === undefined){
              console.log("Artist: Ace of Base");
              console.log("Song name: The Sign");
              console.log("Spotify link: https://open.spotify.com/track/3DYVWvPh3kGwPasp7yjahc?autoplay=true&v=T");
              console.log("Album: Happy Nation");
          }
          else{
              spotify.search({ type: "track", query: dataArr[1]})
              .then(function(response){
                  var output = response.tracks.items;
                  for(i=0;i<output.length;i++){
                      var artists = output[i].artists;
                      for(j=0;j<artists.length;j++){
                          console.log("Artist: " + artists[j].name);
                      }
                      console.log("Song name: " + output[i].name);
                      console.log("Spotify link: " + output[i].external_urls.spotify);
                      console.log("Album: " + output[i].album.name);
                      console.log(" ");
                  }
              })
              .catch(function(err){
                  console.log(err);
              })
          }
      }
      
      else if(command == "movie-this"){
          if(dataArr[0] === undefined){
              console.log("Title: Mr. Nobody");
              console.log("The movie was made in: 2009");
              console.log("IMDB Rating: 7.9");
              console.log("Rotten Tomatoes Rating: 67%");
              console.log("Produced in: Belgium");
              console.log("Languages: English");
              console.log("Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.");
              console.log("Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham, Rhys Ifans, Natasha Little");
          }
          else{
              var omdbURL = "http://www.omdbapi.com/?t=" + dataArr[1] + "&y=&plot=short&apikey=trilogy";
              request(omdbURL, function(error, response, body){
      
                  if (!error && response.statusCode === 200) {
                      console.log("Title: " + JSON.parse(body).Title);
                      console.log("The movie was made in: " + JSON.parse(body).Year);
                      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
                      var ratings = JSON.parse(body).Ratings;
                      for(i=0;i<ratings.length;i++){
                          if(ratings[i].Source == "Rotten Tomatoes"){
                              console.log("Rotten Tomatoes Rating: " + ratings[i].Value);
                          }
                      }
                      console.log("Produced in: " + JSON.parse(body).Country);
                      console.log("Languages: " + JSON.parse(body).Language);
                      console.log("Plot: " + JSON.parse(body).Plot);
                      console.log("Actors: " + JSON.parse(body).Actors);
                  }
              
              })
          }
      }
  })
}
else{
  console.log("Please input a correct command.");
}

// var getSpotify = function () {

// function userCommand (command,input) {
//   switch (command){
//     case "concert-this":
//         concertThis();
//       break;
//     case "spotify-this":
//         spotifyThisSong();
//         break
//     case "movie-this":
//         movieThis();
//         break;
//     case "do-this":
//         doThis(input);
//         break;
//     default:
//         Console.log( "LIRI does not know that");
//         break


//   }
// }
// userCommand (command, input);
// function concertThis () {
// };
// function spotifyThisSong(){
//   spotify.search({ type: "track", query: "songName" }, function( err, 
//         data)  { 
     
//         if (err) {
//           console.log("Error occurred: " + err);
//           return;
//         }
//         //console.log(data.tracks.items[0])
//         //  [i].album.artists[0].name);
//         var songs = data.tracks.items;
//         for (var i = 0; i < songs.length; i++) {
//           console.log(i);
//           console.log("artist(s):" + songs[i].artists.map(getArtist));
//           console.log("song name: " + songs[i].name);
//           console.log("preview song: " + songs[i].preview_url);
//           console.log("album: " + songs[i].album.name);
//           console.log("--------------------------------------------------");
//         }
//       });
//     };

// function movieThis(){
//   axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   })
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log("---------------Data---------------");
//       console.log(error.response.data);
//       console.log("---------------Status---------------");
//       console.log(error.response.status);
//       console.log("---------------Status---------------");
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });
// };
// function doThis (){

//  };
// function movieThis (){

// };


// var spotify = new Spotify({
//   id: keys.spotify.id,
//   secret: keys.spotify.secret
// });
// var getArtist = function(artist) {
//   return artist.name;
// };
// var getSpotify = function(songName) {
//   spotify.search({ type: "track", query: "songName" }, function( err, 
//     data)  { 
 
//     if (err) {
//       console.log("Error occurred: " + err);
//       return;
//     }
//     //console.log(data.tracks.items[0])
//     //  [i].album.artists[0].name);
//     var songs = data.tracks.items;
//     for (var i = 0; i < songs.length; i++) {
//       console.log(i);
//       console.log("artist(s):" + songs[i].artists.map(getArtist));
//       console.log("song name: " + songs[i].name);
//       console.log("preview song: " + songs[i].preview_url);
//       console.log("album: " + songs[i].album.name);
//       console.log("--------------------------------------------------");
//     }
//   });
// };
// var pick = function(command, input) {
//   switch (command) {
//     case "spotify-this-song":
//       getSpotify(input);
//       break;
//     default:
//       console.log("LiRI does not know that");
//   }
// }
// var runThis = function(argOne, argTwo){
//   pick(argOne, argTwo);
// };

// runThis(process.argv[2], process.argv[3]);
//    let artist = data.tracks.items[i].album.artists[0].name;
//    console.log(artist);
// }

//Then run a request with axios to the OMDB API with the movie specified
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   })
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log("---------------Data---------------");
//       console.log(error.response.data);
//       console.log("---------------Status---------------");
//       console.log(error.response.status);
//       console.log("---------------Status---------------");
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });

//}