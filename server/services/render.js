exports.home = (req, res) => {
  res.render("index");
};

exports.addUser = (req, res) => {
  res.render("add-user");
};

exports.updateUser = (req, res) => {
  res.render("update-user");
};
