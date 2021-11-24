const express = require("express");
const router = express.Router();

// Home Page Route
router.get("/", (req, res) => {
  res.render("index");
});

// Add User Route
router.get("/add-user", (req, res) => {
  res.render("add-user");
});

// Update User Route
router.get("/update-user", (req, res) => {
  res.render("update-user");
});

module.exports = router;