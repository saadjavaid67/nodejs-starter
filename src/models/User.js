// src/models/User.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { encryptionRounds } = require("../../config/app");
const { generateAuthToken } = require("../../providers/AuthProvider");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Exclude from default queries
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
    toJSON: {
      transform: function (doc, ret) {
        // Exclude password field when converting to JSON
        delete ret.password;
        return ret;
      },
    },
    methods: {
      async login(candidatePassword) {
        try {
          // Compare hash
          const isMatch = await bcrypt.compare(
            candidatePassword,
            this.password
          );

          return isMatch;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    },
  }
);

// Middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const hashedPassword = await bcrypt.hash(this.password, encryptionRounds);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
