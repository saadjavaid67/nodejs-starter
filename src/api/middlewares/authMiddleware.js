// src/middlewares/authMiddleware.js

const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const { appKey } = require("../../../config/app");

const authMiddleware = async (req, res, next) => {
  // Check if the authorization header is present
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    // Decode the token to get user information
    const decoded = jwt.decode(token, appKey);

    // Check if the token has expired
    if (decoded.exp <= (Date.now() / 1000)) {
      return res.status(401).json({ error: "Token has expired" });
    }

    // Find the user by the decoded information
    const user = await User.findById(decoded.data._id);

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Attach the user object to the request for use in route handlers
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
