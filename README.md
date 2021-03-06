# Homework 10-liri-node-app

### Instructions:

In this assignment, created a LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives back data.

##

1. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

2. Made a new GitHub repository called liri-node-app and cloned it to the computer.

3. To retrieve the data that will power this app, we need to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. we will find these Node packages crucial for your assignment.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)






## What does this project do?

This project is provided to address the requirments of GAtech coding bootcamp, homework for week 10 (homework 10).
The assignment required use of several node libraries as well as several different api.
The node application "liri.js" is prompt driven using the node inquirer package and can take in one of four commands:
    1. `concert-this`
        This will show the following information about the song in your terminal/bash window;  Artist, Song name, preview link from Spotify and album the song is from.

    2. `spotify-this-song`
        This will output the following information to your terminal/bash window; 
        Name of the venue, location and date of event.

    3. `movie-this`
        This will output the following information to your terminal/bash window; Title, Year, IMDB Rating, Tomatoes Rating, Country of movie production, .Language, plot and actors.

    4. `do-what-it-says` - 
        This will output search results based on the content of "random.txt" file.

## This assignment shows various node.js methods necessary to perform api calls, json parsing, data storage and uses multiple NMP packages.

## How to use the project -

to begin user will type "node liri.js" at the command prompt
afterwards the user will be prompted to provide more details

concert-this - user must input a performing artist to search concert offerings and confirm the selection.
spotify-this-song - user must provide a song title to search for and confirm the selection.
movie-this - user must provide the title of a movie to search for and confirm the selection.
do-what-it-says - once selected, the remaining prompts are ignored (with the exception of the confirmation prompt).


## GitHub,link- https://rajtina.github.io/liri-node-app/