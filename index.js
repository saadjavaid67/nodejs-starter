// index.js
require("dotenv").config();
const app = require("./src/app");
const { port } = require("./config/app");

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

const findAvailablePort = (port) => {
  const server = require("http").createServer();
  // start server
  server.listen(port, () => {
    server.close(() => {
      startServer(port);
    });
  });

  // Listen for server errors
  server.on("error", (err) => {
    if (err.code == "EADDRINUSE") {
      console.error(
        `ERROR: Port ${port} is already in use. Trying the next one...`
      );
      findAvailablePort(+port + 1);
    }
  });
};

// Entry Point
findAvailablePort(port);
