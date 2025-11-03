const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("user server is available on updated port");
}); 



const user = [
  { id: 1, name: "Haris Rouf", email: "shahriar100@gmail.com" },
  { id: 2, name: "Rayen", email: "rayen100@gmail.com" },
  { id: 3, name: "Cornel", email: "cornel100@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(user);
});

app.listen(port, () => {
  console.log(`user server started on port: ${port}`);
});
