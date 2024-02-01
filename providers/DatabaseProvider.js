// src/providers/DatabaseProvider.js

const { databaseUrl, options } = require("../config/database");
const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(databaseUrl, options);
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the application if unable to connect to the database
  }
};

const disconnectDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from the database!");
  } catch (error) {
    console.error("Error disconnecting from the database:", error.message);
    process.exit(1); // Exit the application if unable to disconnect from the database
  }
};

const dropAllMigrations = async () => {
  try {
    await mongoose.connection.dropDatabase();
    console.log("Dropped all migrations!");
  } catch (error) {
    console.error("Error dropping Migrations from the database:", error.message);
    process.exit(1); // Exit the application if unable to disconnect from the database
  }
};

module.exports = { connectDatabase, disconnectDatabase, dropAllMigrations };
