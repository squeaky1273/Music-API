const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Replace this with actual model

const SongSchema = new Schema({
  title: { type: String },
  lyrics: { type: String },
  released: { type: String },
  album: { type: String },
  artist: [{ type: Schema.Types.ObjectId, ref: "Artist" }]
})

Song = mongoose.model('Song', SongSchema);

module.exports = Song;