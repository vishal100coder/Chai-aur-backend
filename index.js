require("dotenv").config();
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello duniya");
});
app.get("/twitter", (req, res) => {
  res.send("<h1>Hii vishal there</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app is listening on ${port}`);
});
