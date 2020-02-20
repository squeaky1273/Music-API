const express = require('express')

const Thing = require('../models/artist.js')

const router = express.Router(); // eslint-disable-line new-cap

// GET /api/thing
router.get('/', (req, res) => {
  Artist.find().then(artists => {
    res.send({ artists })
  })
})

// TODO: Add more routes.


module.exports = router;