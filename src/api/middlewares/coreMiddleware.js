// src/middlewares/coreMiddleware.js

const bodyParser = require('body-parser');
const cors = require('cors');

const setupCoreMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(cors());
};

module.exports = setupCoreMiddleware;