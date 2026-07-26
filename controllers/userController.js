exports.getUsers = (req, res) => {
  res.send("all user");
};

exports.createUser = (req, res) => {
  const { name, age } = req.body;
  res.send(`welcome ${name} Myage ${age} `);
};
