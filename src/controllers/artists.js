const express = require('express');

const Artist = require('../models/artist.js');
const User = require('../models/user.js');

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/artist
router.get('/', (req, res) => {
  Artist.find().lean().then(artists => {
    res.send({ artists })
  })
})

// TODO: Add more routes.
// GET by ID
router.get('/:id', (req, res) => {
  Artist.findOne({
      _id: req.params.id
    }).populate('song').lean()
    .then(artist => {
      res.json(artist);
    })
})

// POST /api/artist
router.post('/api/artist/new', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Artist.create(req.body)
    .then(function(artist) {
      res.send(artist)
    })
  }
})

// PUT
router.put('/api/artist/:id', (req, res) => {
  const filter = { _id: req.params.id }
  const update = req.body 
  Artist.findOneAndUpdate(filter, update, {
    new: true
  })
  .then(function(artist) {
    return res.send(artist)
  })
});
//DELETE by ID
router.delete('/api/artist/:id', (req, res) => {
  Artist.findByIdAndRemove(req.params.id)
  .then(function(artist) {
    return res.send(artist)
  })
});

module.exports = router;