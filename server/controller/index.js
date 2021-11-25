const User = require("../model/User");

// Create and Save a new User
exports.create = async (req, res) => {
  try {
    const { name, email, gender, status } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ msg: "User already exists!" });
    }

    // New User
    user = new User({ name, email, gender, status });

    // Save user in the database
    await user.save();
    res.status(200).send({ msg: "User created successfully!" });
  } catch (err) {
    res.status(500).send({ msg: err.message || "Server Error!" });
  }
};

// Retrieve all Users / Retrieve a single User
exports.find = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ msg: err.message || "Server Error!" });
  }
};

// Update a User with Id
exports.update = (req, res) => {};

// Delete a User with Id
exports.delete = (req, res) => {};
