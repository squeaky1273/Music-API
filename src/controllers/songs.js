const express = require('express')
const router = express.Router({ mergeParams: true }); // eslint-disable-line new-cap

const Artist = require('../models/artist.js');
const Song = require('../models/song.js')
const User = require('../models/user.js');

// GET list of Songs
// http://localhost:3000/api/artists/a_id/songs
router.get('/all', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Song.find().then(result => {
    res.json(result);
  })
}});

// GET specific Song
// http://localhost:3000/songs/id
router.get('/:id', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Song.findOne({_id: req.params.id}).then(result => {
    res.json(result);
  })
}});

// POST new Song
// http://localhost:3000/api/artists/a_id/songs/new
router.post('/new', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  const song = new Song(req.body)
  song.artist = req.params.a_id
    song.save()
    .then(() => {
        return Artist.findById(req.params.a_id)
    }) 
    .then(artist => {
        artist.songs.push(song)
        artist.save();
        res.json(song)
    }).catch(err => {
        console.log(err.message)
        res.send(err.message)
    })
}
});

// PUT update song
// http://localhost:3000/api/artist/a_id/songs/id/update
router.put('/:id/update', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((song) => {
    song.artist = req.artistId
    song.save()
    res.json(song)
  })
  .catch((err) => {
    throw err.message
  });
}});

//DELETE by ID
// http://localhost:3000/songs/id/delete
router.delete('/:id/delete', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Song.findByIdAndRemove(req.params.id)
  .then(function(song) {
    return res.json('Deleted')
  })
  .catch((err) => {
    throw err.message
  });
}});

module.exports = router
