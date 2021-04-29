'use strict';

require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI

const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const server = require('./src/server.js');

server.start(process.env.PORT);
