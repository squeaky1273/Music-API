const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Replace this with actual model

const SongSchema = new Schema({
  title: { type: String },
  lyrics: { type: String },
  album: { type: String }
})

Song = mongoose.model('Song', SongSchema);

module.exports = Song;