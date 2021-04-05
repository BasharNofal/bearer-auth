'use strict';

// Start up DB Server
require('dotenv').config();
require('./src/server.js').startup(process.env.PORT);
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGODB_URI, options);
// .then(() => {
// }).catch(error => {
//   throw new Error(error);
// })

// Start the web server
