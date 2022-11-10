const express = require("express");
const Usermodel = require("../models/UserSchema");
const router = express.Router();

//  ADD NEW USER
router.post("/", (req, res) => {
  const result = new Usermodel({
    username: req.body.name,
    usermail: req.body.email,
    userphone: req.body.phoneno,
    useraddress: req.body.address,
    usercity: req.body.city,
  });
  result.save();
  res.redirect("/");
});

//  DATA GET FROM DATABASE
router.get("/", async (req, res) => {
  const result = await Usermodel.find();
  res.render("index", { result });
});

// DELETE DOCUMENT FROM DATABASE
router.get("/:id", async (req, res) => {
  await Usermodel.findByIdAndDelete({ _id: req.params.id });
  res.redirect("/");
});

// UPADTE  EXISTING DOCUEMENT

module.exports = router;
