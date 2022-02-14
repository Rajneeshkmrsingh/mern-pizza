const express = require("express");
//const { findOneAndDelete } = require("../models/usermodel");
const User = require("../models/usermodel");
const route = new express.Router();
route.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await new User({ name, email, password });
  try {
    const data = await user.save();
    res.status(201).send({ message: "Registered successfully." });
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const findUsers = await User.find({ email, password });
  try {
    if (findUsers.length > 0) {
      const { name, email, _id, isAdmin } = findUsers[0];
      const currentUser = {
        _id: _id,
        name: name,
        email: email,
        isAdmin: isAdmin,
      };
      res.status(200).send(currentUser);
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
route.get("/getallusers", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (error) {
    res.status(400).send({message:error});
  }
});
route.post("/deleteuser", async (req, res) => {
  const _id = req.body.userid;
  try {
    await User.findOneAndDelete({ _id });
    res.send("deleted user Successfully.");
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = route;
