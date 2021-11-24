const express = require("express");
const render = require("../services/render");
const controller = require("../controller");
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

// API
router.post("/api/users", controller.create);
router.get("/api/users", controller.find);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.delete);

module.exports = router;
