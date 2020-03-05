const express = require('express');

const Artist = require('../models/artist.js');
const User = require('../models/user.js');

const router = express.Router(); // eslint-disable-line new-cap

// GET all artists
router.get('/', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Artist.find().lean()
  .then(results => {
    res.json({ results })
  })
  .catch((err) => {
      throw err.message
  });
}});

// GET one artist by ID
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

// // POST create new artist
// router.post('/api/new', (req, res) => {
//   // console.log('is it here?')
//   if (!req.user) {
//     res.send({err: 'Need to be logged in' })
//   } else {
//   Artist.create(req.body)
//     .then(function(artist) {
//       res.json(artist)
//     })
//     .catch((err) => {
//       throw err.message
//     });
//   }
// })

// POST new Artist
router.post('/api/new', (req, res) => {
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  const artist = new Artist(req.body)
  artist.save().then(result => {
      res.json(result)
  })
}});

// PUT update artist
router.put('/:id', (req, res) => { 
  if (!req.user) {
    res.send({err: 'Need to be logged in' })
  } else {
  Artist.findIdAndUpdate(req.params.id, {
    name: req.body.name,
    active: req.body.active,
    // songs: req.body.songs
  })
  .then((artist) => {
    return res.json(artist)
  })
  .catch((err) => {
    throw err.message
  });
}});

// DELETE artist by ID
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