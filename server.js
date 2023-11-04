const express = require("express");

const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const routes = require("./src/router/routes");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();

app.use(express.static("public"));

//databse connection
mongoose.connect("mongodb://127.0.0.1:27017/pizza", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected...");
});
db.on("error", console.error.bind(console, "connection error: "));

//Session config
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(expressLayout);
app.set("view engine", "ejs");



app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
