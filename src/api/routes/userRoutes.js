// src/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const { registerValidator, loginValidator } = require("../validators/userValidator");
const authMiddleware = require("../middlewares/authMiddleware");

// User route
router.get("/", authMiddleware,userController.index);

// Register user route
router.post("/register", registerValidator, userController.register);

// Login user route
router.post("/login", loginValidator, userController.login);

module.exports = router;
