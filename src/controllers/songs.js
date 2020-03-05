const express = require('express')
const router = express.Router(); // eslint-disable-line new-cap

const Song = require('./songs.js')
const User = require('../models/user.js');

// GET list of Songs
router.get('/all', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Song.find().then(result => {
    res.json(result);
  })
}});

// GET specific Song
router.get('/:id', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Song.findOne({_id: req.params.id}).populate('artist').then(result => {
    res.json(result);
  })
}});

// POST new Song
router.post('/api/new', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  const song = new Song(req.body)
  song.save().then(result => {
      res.json(result)
  })
}});

// PUT update song
router.put('/:id/update', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((song) => {
    return res.json(song)
  })
  .catch((err) => {
    throw err.message
  });
}});

//DELETE by ID
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
