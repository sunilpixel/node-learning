const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware Chala");
  next();
});

app.get("/user", (req, res) => {
  const { name, age } = req.query;
  res.send(`name: ${name},age:${age}`);
});

app.post("/user", (req, res) => {
  const { name, age } = req.body;

  console.log(req.body);

  res.send(`Welcome ${name}. Age is ${age}`);
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.get("/contact", (req, res) => {
  res.send("contact page");
});

app.get("/search", (req, res) => {
  const { keyword, page } = req.query;
  res.send(`keyword: ${keyword}, page: ${page}`);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
