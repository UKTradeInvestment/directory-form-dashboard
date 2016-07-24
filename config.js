'use strict';

var secrets = require('./secrets.json');

const port = process.env.PORT || 3000;

	module.exports = {
  env: process.env.NODE_ENV,
  port: port,
  ga: {
    clientEmail: secrets.client_email,
    privateKey: secrets.private_key,
		viewID: process.env.GA_VIEW_ID
  }
};
