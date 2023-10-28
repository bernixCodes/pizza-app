const express = require("express");

const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const routes = require("./src/router/routes");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(expressLayout);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
