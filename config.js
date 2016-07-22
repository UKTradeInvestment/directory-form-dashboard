'use strict';

const port = process.env.PORT || 3000;

module.exports = {
  env: process.env.NODE_ENV,
  port: port,
  ga: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY,
    view_id: process.env.GA_VIEW_ID
  }
};
