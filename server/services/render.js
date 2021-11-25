const axios = require("axios");

exports.home = async (req, res) => {
  // Make a GET request to the /api/users route
  try {
    const { data } = await axios.get("http://localhost:3000/api/users");
    res.render("index", { users: data });
  } catch (err) {
    console.log(err);
  }
};

exports.addUser = (req, res) => {
  res.render("add-user");
};

exports.updateUser = (req, res) => {
  res.render("update-user");
};
