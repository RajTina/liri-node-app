# Homework 10-liri-node-app

### Instructions:

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Before You Begin

1. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

2. Make a new GitHub repository called liri-node-app and clone it to your computer.

3. To retrieve the data that will power this app, you'll need to send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.

   * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)
   
## Submission Guide

Create and use a standard GitHub repository. As this is a CLI App, it cannot be deployed to GitHub pages or Heroku. This time you'll need to include screenshots, a GIF, and/or a video showing us that you have the app working with no bugs. You can include these screenshots/GIFs or a link to a video in a `README.md` file.

In order to meet the Employer Competitive standards and be ready to show your application to employers, the `README.md` file should meet the following criteria:

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading in this assignment.



## What does this project do?

This project is provided to address the requirments of Rutgers coding bootcamp, homework for week 10 (homework 10).
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