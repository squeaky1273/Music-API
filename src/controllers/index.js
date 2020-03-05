const path = require('path');
const express = require('express');
const bcrypt = require("bcryptjs");
const artistRoutes = require('./artists.js');
const songRoutes = require('./songs.js');
const userRoutes = require('./user.js');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: Change to your model.

router.use('/artists', artistRoutes);

router.use('/songs', songRoutes);

router.use('/user', userRoutes);

module.exports = router;