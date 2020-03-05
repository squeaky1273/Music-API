const express = require('express')
const router = express.Router(); // eslint-disable-line new-cap

const Song = require('../models/songs.js')

// GET list of Songs
router.get('/all', (req, res) => {
  Song.find().then(result => {
    res.json(result);
  })
})

// GET specific Song
router.get('/:id', (req, res) => {
  Song.findOne({_id: req.params.id}).then(result => {
    res.json(result);
  })
})

// POST new Song
router.post('/api/new', (req, res) => {
  const song = new Song(req.body)
  song.save().then(result => {
      res.json(result)
  })
})

// POST /api/artist
router.post('/api/song/new', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Song.create(req.body)
    .then((song) => {
      res.json(song)
    })
    .catch((err) => {
      throw err.message
    });
  }
})

// PUT/UPDATE
router.put('/api/song/:id', (req, res) => {
  Song.findOneAndUpdate(req.params.id, {
    title: req.body.title,
    lyrics: req.body.lyrics,
    released: req.body.released,
    album: req.body.album,
    artist: req.body.artist
  })
  .then((song) => {
    return res.json(song)
  })
  .catch((err) => {
    throw err.message
  });
});

//DELETE by ID
router.delete('/api/song/:id', (req, res) => {
  Song.findByIdAndRemove(req.params.id)
  .then(function(song) {
    return res.json('Deleted')
  })
  .catch((err) => {
    throw err.message
  });
});

module.exports = router
