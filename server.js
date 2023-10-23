const express = require("express");

const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// app.use(expressLayout);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});
  

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
