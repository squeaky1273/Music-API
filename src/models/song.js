const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autopopulate = require('../utils/autopopulate')

// TODO: Replace this with actual model

const SongSchema = new Schema({
  title: { type: String, required: true },
  released: { type: String, required: true },
  album: { type: String, required: true },
  artist: [{ type: Schema.Types.ObjectId, ref: "Artist" }]
})

SongSchema.pre('save', (next) => {
  // SET createdAt AND updatedAt
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
      this.createdAt = now
  };
  next();
});

let Song = mongoose.model('Song', SongSchema);

module.exports = Song;