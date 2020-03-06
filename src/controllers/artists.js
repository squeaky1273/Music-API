const express = require('express');

const Artist = require('../models/artist.js');
const User = require('../models/user.js');

const router = express.Router(); // eslint-disable-line new-cap

// GET all artists
// http://localhost:3000/api/artists/all
router.get('/all', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Artist.find().populate('song')
  .then(results => {
    res.json({ results })
  })
  .catch((err) => {
      throw err.message
  });
}});

// GET one artist by ID
// http://localhost:3000/artists/id
router.get('/:id', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Artist.findOne({
      _id: req.params.id
    }).populate('song').lean()
    .then(result => {
      res.json(result);
    })
    .catch((err) => {
      throw err.message
  });
}});

// POST new Artist
// http://localhost:3000/artists/api/new
router.post('/new', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  const artist = new Artist(req.body)
  artist.added_by = req.user_id

  artist.save().then(result => {
      res.json(result)
  })
}});

// PUT update artist
// http://localhost:3000/artists/id/update
router.put('/:id/update', (req, res) => { 
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Artist.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((artist) => {
    return res.send(artist);
  })
  .catch((err) => {
    throw err.message
  });
}});

// DELETE artist by ID
// http://localhost:3000/id
router.delete("/:id", (req, res) => {
  if (!req.user) {
    res.send({ err: 'Must be logged in' })
  } else {
    Artist.deleteOne( {_id: req.params.id} )
      .then(function(err, artist) {
        res.send('Entry deleted');
        })
    .catch(err => {
      console.log(err.message);
    });
  }
});

module.exports = router