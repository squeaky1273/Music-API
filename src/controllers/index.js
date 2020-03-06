const path = require('path');
const express = require('express');
const bcrypt = require("bcryptjs");
const artistRoutes = require('./artists.js');
const songRoutes = require('./songs.js');
const userRoutes = require('./user.js');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/api/artists', artistRoutes);
router.use('/api/songs', songRoutes);

router.use('/api/artists/:a_id/songs', function(req, res,
next) {
    next()
    }, songRoutes
    );

router.get('/', (req, res) => {
    res.send('text')
});

router.use('/user', userRoutes);


module.exports = router;