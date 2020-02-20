const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Replace this with actual model

const ArtistSchema = new Schema({
  name: { type: String, required: true },
  active: { type: String }
})

Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;