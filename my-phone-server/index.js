const express = require("express");
const phones = require("./phone.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("My phone information coming soon..2");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("i need data for id : ", id);
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});
app.get("/get", (req, res) => {
  res.send("this is get route page..");
});

app.listen(port, () => {
  console.log(`my phone server is running on port : ${port}`);
});
