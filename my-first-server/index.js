const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello this is my first ever server");
});

app.get("/get", (req, res) => {
  res.send("This is getting new!");
});

app.listen(port, () => {
  console.log(`My First server is running on port : ${port}`);
});
