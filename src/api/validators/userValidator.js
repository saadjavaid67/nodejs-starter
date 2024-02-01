const { body } = require("express-validator");
const User = require("../../models/User");

const loginValidator = [
  body("email", "Invalid does not Empty").not().isEmpty(),
  body("email", "Invalid email").isEmail(),
  body("password", "The minimum password length is 8 characters").isLength({
    min: 8,
  }),
];

const registerValidator = [
  body("name", "username does not Empty").not().isEmpty(),
  body("email", "Invalid email").isEmail(),

  // validate unique email
  body("email").custom(async (value) => {
    return User.findOne({ email: value }).then((user) => {
      if (user) return Promise.reject("User with this email already exists!");
    });
  }),

  body("password", "password does not Empty").not().isEmpty(),
  body("password", "The minimum password length is 8 characters").isLength({
    min: 8,
  }),
];

module.exports = { registerValidator, loginValidator };
