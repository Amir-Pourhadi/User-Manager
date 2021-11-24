const express = require("express");
const dotenv = require("dotenv");

// Create a new express application instance
const app = express();

// Load environment variables from .env file
dotenv.config({ path: "config.env" });

// The port the express app will listen on
const port = process.env.PORT || 8080;

// Home page route
app.get("/", (req, res) => {
  res.send("User Manager Application!");
});

// Start the express server
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
