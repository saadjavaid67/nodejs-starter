// src/app.js

const express = require("express");
const routes = require("./api/routes");
const { connectDatabase, dropAllMigrations } = require("../providers/DatabaseProvider");
const setupCoreMiddleware = require("./api/middlewares/coreMiddleware");
const { apiPrefix } = require("../config/app");

const app = express();

// Middleware
setupCoreMiddleware(app);

// Database connection setup
connectDatabase();
// dropAllMigrations();

// Routes
app.use(apiPrefix, routes); // API routes are prefixed with '/api/v1'

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

module.exports = app;
