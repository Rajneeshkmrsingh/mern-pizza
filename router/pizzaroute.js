const express = require("express");
const router = express.Router();
const Pizzas = require("../models/pizzamodel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizzas.find();
    res.send(pizzas);
  } catch (error) {
    res.json({ meassage: "There is something error" });
  }
});
router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;
  const addPizza = await new Pizzas({
    name: pizza.name,
    description: pizza.description,
    image: pizza.image,
    varients: ["small", "medium", "large"],
    prices: [pizza.prices],
    category: pizza.category,
  });
  try {
    const pizza = await addPizza.save();
    res.send(pizza);
  } catch (error) {
    res.status(400).json({ message: "Error in recieving Pizza data." });
  }
});
router.post("/pizzaid", async (req, res) => {
  const _id = req.body.pizzaid;
  try {
    const pizzabyid = await Pizzas.findOne({ _id });
    res.status(200).send(pizzabyid);
  } catch (error) {
    res.status(400).json({ message: err });
  }
});
router.post("/updatepizza", async (req, res) => {
  const updatedpizza = req.body.updatedpizza;
  try {
    const pizza = await Pizzas.findOne({ _id: updatedpizza._id });
    (pizza.name = updatedpizza.name),
      (pizza.category = updatedpizza.category),
      (pizza.description = updatedpizza.description),
      (pizza.prices = [updatedpizza.prices]),
      (pizza.image = updatedpizza.image),
      await pizza.save();
    res.send("Pizza details saved successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.post("/deletepizza", async (req, res) => {
  const _id = req.body.pizzaid;
  try {
    await Pizzas.findOneAndDelete({ _id });
    res.send("Pizza deleted successfully.");
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
