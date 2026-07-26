const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");
const searchRoutes = require("./routes/searchRoutes");

app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware Chala");
  next();
});

app.use("/user", userRoutes);

app.use("/search", searchRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
