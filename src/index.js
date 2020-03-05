const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const util = require('util');
// const port = process.env.PORT;
const port = 3000;
require('dotenv').config();

const app = require('./config/express');
const router = require('./controllers/index.js');

// Set db
require('./data/db');

mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = process.env.MONGODB_URI;
mongoose.connect(
  mongoUri,
  { server: { socketOptions: { keepAlive: 1 } } }
);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
app.listen(port, () => {
  console.info(`server started on port ${port}! Click to view: http://localhost:${port}`);  // eslint-disable-line no-console
});

// app.listen(port)
module.exports = app;