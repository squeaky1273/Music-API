const express = require('express')

const Thing = require('../models/artist.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/artist
router.get('/', (req, res) => {
  Artist.find().then(artists => {
    res.send({ artists })
  })
})

// TODO: Add more routes.
// GET by ID
router.get('/api/artist/:id', (req, res) => {
  Artist.findById(req.params.id, (err, artist) => {
    res.send({ artist })
  })  
})

// POST /api/artist
router.post('/api/artist/new', (req, res) => {
  Artist.create(req.body)
    .then(function(artist) {
      res.send(artist)
    })
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

module.exports = router;