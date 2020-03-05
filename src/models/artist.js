const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: Replace this with actual model

const ArtistSchema = new Schema({
  name: { type: String, required: true },
  active: { type: String },
  songs: [{ type: Schema.Types.ObjectId, ref: "Song" }]
})

ArtistSchema.pre('save', (next) => {
  // SET createdAt AND updatedAt
  const now = new Date()
  this.updatedAt = now
  if (!this.createdAt) {
      this.createdAt = now
  };
  next();
});

let Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;