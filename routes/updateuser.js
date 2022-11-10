const express = require("express");
const Usermodel = require("../models/UserSchema");
const router = express.Router();
router.get("/update/:id", async (req, res) => {
  const result = await Usermodel.findByIdAndUpdate({ _id: req.params.id });
  res.render("show", { result });
});
router.post("/:id", async (req, res) => {
  Usermodel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      username: req.body.name,
      usermail: req.body.email,
      userphone: req.body.phoneno,
      useraddress: req.body.address,
      usercity: req.body.city,
    },
    (err, docs) => {
      if (!err) {
        res.redirect("/");
      }
    }
  );
});

module.exports = router;
