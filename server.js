const express = require("express");

// Create a new express application instance
const app = express();

// The port the express app will listen on
const port = process.env.PORT;

// Home page route
app.get("/", (req, res) => {
  res.send("User Manager Application!");
});

// Start the express server
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
