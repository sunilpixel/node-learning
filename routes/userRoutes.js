const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("all user");
});

router.post("/", (req, res) => {
  const { name, age } = req.body;
  res.send(`welcome ${name}, Myage ${age}`);
});

module.exports = router;
