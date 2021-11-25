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
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send({ msg: err.message || "Server Error!" });
  }
};

// Retrieve all Users / Retrieve a single User
exports.find = async (req, res) => {
  try {
    if (req.query.id) {
      const id = req.query.id;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).send({ msg: `User not found with ID: ${id}` });
      } else {
        res.status(200).send(user);
      }
    } else {
      const users = await User.find();
      res.status(200).send(users);
    }
  } catch (err) {
    res.status(500).send({ msg: err.message || "Server Error!" });
  }
};

// Update a User with Id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

    if (!user) {
      return res.status(404).send({ msg: `User not found with ID: ${id}` });
    } else {
      res.status(200).send({ msg: "User updated successfully!" });
    }
  } catch (err) {
    res.status(500).send({ msg: err.message || "Server Error!" });
  }
};

// Delete a User with Id
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndRemove(id);
    if (!user) {
      return res.status(404).send({ msg: `User not found with ID: ${id}` });
    } else {
      res.status(200).send({ msg: "User deleted successfully!" });
    }
  } catch (err) {
    res.status(500).send({ msg: err.message || "Server Error!" });
  }
};
