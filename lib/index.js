const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

// Import connection to database function
const connectDB = require("../server/database/connection");

// Create a new express application instance
const app = express();

// Load environment variables from .env file
dotenv.config({ path: "config.env" });

// The port the express app will listen on
const port = process.env.PORT || 8080;

// Log requests to the console.
app.use(morgan("dev"));

// MongoDB connection
connectDB();

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set("view engine", "ejs");

// Serve static assets
const assets = path.join(__dirname, "..", "assets");
fs.readdir(assets, (error, folders) => {
  if (error) {
    console.log(`Unable to Scan Directory: ${error}`);
  } else {
    folders.forEach((folder) => {
      app.use(`/${folder}`, express.static(path.join(assets, folder)));
    });
  }
});

// Routes
app.use("/", require("../server/routes"));

// Start the express server
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
