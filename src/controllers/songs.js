const express = require('express')
const router = express.Router(); // eslint-disable-line new-cap

const Song = require('../models/songs.js')

// POST new Song
router.post('/create', (req, res) => {
    const season = new Season(req.body)
    season.save().then(result => {
        res.json(result)
    })
})

// GET list of Songs
router.get('/', (req, res) => {
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

module.exports = router
