const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../controllers/index.js');
const bcrypt = require("bcryptjs");
const router = require('../controllers/index.js');
const jwt = require("jsonwebtoken")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross Origin Resource Sharing.
app.use(cors());
app.use(expressValidator());

// app.use(router);

//Check auth - headers
// let checkAuth = (req, res, next) => {
//     const authorization = req.headers['authorization']
//     console.log("Checking authentication");
//     // console.log(authorization)
//     if (typeof req.headers.authorization === "undefined" || req.headers.authorization === null) {
//     // if (typeof req.headers.token === "undefined" || req.headers.token === null) {
//     req.user = null;
//       console.log("I'm here")
//       next();
//     } else {
//       const bearer = authorization.split(' ');
//       let token = bearer[1];
//       jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
//         if (err) {
//             console.log('Error during authentication: Invalid signature')
//             req.user = null;
//         } else {
//             req.user = decodedToken;
//         }
//         next();
//       })
//     }
//   };

const checkAuth = (req, res, next) => {
  // console.log(req.headers.token);
  console.log("Checking authentication");
  // first checks if there's a token stored in the body and/or query
  if (typeof req.headers.token === "undefined" || req.headers.token === null)  {
    // console.log(req.headers.token);
    req.user = null;
    } else {
      // console.log("accepted")
      // , req.headers.token);
      const token = req.headers.token;
      const decodedToken = jwt.decode(token, { complete: true }) || {};
      req.user = decodedToken
      // console.log(req.user)

    } 
  // callback to what was supposed to happen before each route is called; middleware; says, this piece of middleware is finished so you can move on; wouldn't run the next route without this piece; makes it so that we don't go on until that asynchronous process is finished
    next();
};
  
  app.use(checkAuth);
  
  // Routes
  app.use('/', router);
// Mount all routes on /api path.
// app.use('/api', routes);

// #TODO: Additional non-API routes go here.

module.exports = app;