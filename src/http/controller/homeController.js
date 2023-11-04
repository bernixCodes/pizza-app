const Menu = require("../../models/menu");

const homeController = {
  landingPage: async (req, res) => {
    try {
      const pizzas = await Menu.find();
      return res.render("home", { pizzas: pizzas });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = homeController;
