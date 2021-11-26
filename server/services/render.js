const axios = require("axios");

exports.home = async (req, res) => {
  // Make a GET request to the /api/users route
  try {
    const { data } = await axios.get("http://localhost:3000/api/users");
    res.render("index", { users: data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

exports.addUser = (req, res) => {
  res.render("add-user");
};

exports.updateUser = async (req, res) => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/users", { params: { id: req.query.id } });
    res.render("update-user", { user: data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
