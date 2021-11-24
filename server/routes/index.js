const express = require("express");
const render = require("../services/render");
const router = express.Router();

/**
 * @route GET /
 * @desc Home Page
 * @access Public
 */
router.get("/", render.home);

/**
 * @route GET /add-user
 * @desc Add User Page
 * @access Public
 */
router.get("/add-user", render.addUser);

/**
 * @route GET /update-user
 * @desc Update User Page
 * @access Public
 */
router.get("/update-user", render.updateUser);

module.exports = router;
