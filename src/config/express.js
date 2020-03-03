const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../controllers/index.js');
const bcrypt = require("bcryptjs");
const router = require('../controllers/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());
app.use(expressValidator());

app.use(router);

//Check auth - headers
let checkAuth = (req, res, next) => {
    const authorization = req.headers['authorization']
    console.log("Checking authentication");
    console.log(authorization)
    if (typeof req.headers.authorization === "undefined" || req.headers.authorization === null) {
      req.user = null;
      console.log("I'm here")
      next();
    } else {
      const bearer = authorization.split(' ');
      let token = bearer[1];
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
  app.use('/', router);
// Mount all routes on /api path.
// app.use('/api', routes);

// #TODO: Additional non-API routes go here.

module.exports = app;