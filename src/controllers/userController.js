// src/controllers/userController.js

const { validationResult } = require("express-validator");
const User = require("../models/User");
const { generateAuthToken } = require("../../providers/AuthProvider");

// Fetch All User: GET /user
exports.index = async (req, res) => {
  const users = await User.find();
  res.json({ message: "Success", users });
};

// Register User: POST :PREFIX:/user/register
exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // in case request params does NOT meet the validation criteria
    res.status(422).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    // Store user
    const user = await User.create({ name, email, password });

    // Generate auth token
    const token = await generateAuthToken(user);

    // SUCCESS: return response
    return res.status(200).json({
      msg: "User created successfully",
      token: token,
      user: user,
    });
  } catch (error) {
    // ERROR: return response & print error in console
    console.error("ERROR: ", error);
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};

// Login User: POST :PREFIX:/user/login
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // in case request params does NOT meet the validation criteria
    res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    // Find user
    const user = await User.findOne({ email }, 'name email password');

    if (user) {
      // verify & login user
      const login = await user.login(password);

      if (login) {
        // Generate auth token
        const token = await generateAuthToken(user);

        // SUCCESS: return response
        return res.status(200).json({
          msg: "User created successfully",
          token: token,
          user: user,
        });
      }
    }
    return res.status(401).json({ msg: "Incorrect credentials!" });
  } catch (error) {
    // ERROR: return response & print error in console
    console.error("ERROR: ", error);
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};
