const express = require("express");
require("./config/config");
const aluser = require("./routes/getUser");
const updateuser = require("./routes/updateuser");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
app.use(express.static("./public"));
app.set("view engine", "ejs");

app.use("/", aluser);
app.use("/update/", updateuser);

app.listen(PORT);
