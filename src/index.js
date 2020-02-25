const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const util = require('util');
const port = 3000;
require('dotenv').config();

const app = require('./config/express');
const router = require('./controllers/thing.js');

mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = process.env.MONGO_HOST;
mongoose.connect(
  mongoUri,
  { server: { socketOptions: { keepAlive: 1 } } }
);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

// # TODO: Any additional config changes belong here.
var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.headers.jwttoken === "undefined" || req.headers.jwttoken === null) {
    req.user = null;
    next();
  } else {
    var token = req.headers.jwttoken;
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
          console.log('Error during authentication: Invalid signature')
          req.user = null;
      } else {
          req.user = decodedToken;
      }
      next();
    })
  }
};
app.use(checkAuth);

// Routes
app.use(router);

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  module.exports = app.listen(port, () => {
    console.log(`And the winner is: ${port}`);
});
}

module.exports = app;