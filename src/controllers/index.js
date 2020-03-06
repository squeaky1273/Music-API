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
    res.send('<div style="text-align: center"><h1><WELCOME TO THE MUSIC API.</h1><img src="./static/headphones.jpg"><h2>Check the documentation here: <a href="https://squeaky1273.github.io/Music-API/#/">https://squeaky1273.github.io/Music-API/#/</a></h2>');
});

router.use('/user', userRoutes);


module.exports = router;