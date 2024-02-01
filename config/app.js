// src/configs/app.js

// TODO: add validator for required variables
module.exports = {
  apiPrefix: process.env.API_PREFIX || "/api/v1",
  port: process.env.PORT || 5000,
  sessionTimeout: process.env.SESSION_TIMEOUT || "1h",
  appKey: process.env.JWT_TOKEN_SECRET,
  encryptionRounds: process.env.ENCRYPTION_ROUNDS || 10,
};
