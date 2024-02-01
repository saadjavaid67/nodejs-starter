// src/routes/index.js

const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Register user routes
router.use('/user', userRoutes);

module.exports = router;