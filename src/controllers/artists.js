const express = require('express');

const Artist = require('../models/artist.js');
const User = require('../models/user.js');

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/artist
router.get('/all', (req, res) => {
  Artist.find().lean()
  .then(artists => {
    res.json({ artists })
  })
  .catch((err) => {
      throw err.message
  });
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
    .catch((err) => {
      throw err.message
  });
});

// POST/CREATE /api/artist
router.post('/api/new', (req, res) => {
  // console.log('is it here?')
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Artist.create(req.body)
    .then(function(artist) {
      res.json(artist)
    })
    .catch((err) => {
      throw err.message
    });
  }
})

// PUT/UPDATE
router.put('/api/artist/:id', (req, res) => { 
  Artist.findOneAndUpdate(req.params.id, {
    name: req.body.name,
    active: req.body.active,
    songs: req.body.songs
  })
  .then((artist) => {
    return res.json(artist)
  })
  .catch((err) => {
    throw err.message
  });
});

//DELETE by ID
router.delete('/api/artist/:id', (req, res) => {
  Artist.findByIdAndRemove(req.params.id)
  .then(function(artist) {
    return res.json('Deleted')
  })
  .catch((err) => {
    throw err.message
  });
});

module.exports = router;