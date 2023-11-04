const express = require("express");
const router = express.Router();

const homeController = require("../http/controller/homeController");

router.get("/", homeController.landingPage);

router.get("/cart", (req, res) => {
  res.render("customers/cart");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

module.exports = router;
