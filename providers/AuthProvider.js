// src/providers/DatabaseProvider.js

const jwt = require("jsonwebtoken");
const { appKey, sessionTimeout } = require("../config/app");

const generateAuthToken = async (user) => {
  const token = jwt.sign(
    {
      data: { _id: user._id },
    },
    appKey,
    { expiresIn: sessionTimeout }
  );
  return token;
};

module.exports = { generateAuthToken };
