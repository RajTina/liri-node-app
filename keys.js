console.log('this is loaded');
require ('dotenv').config();
exports.spotify = {
  id: process.env.SPOTIFY_ID,
  // process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
  // process.env.SPOTIFY_SECRET
};