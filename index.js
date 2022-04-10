const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs");
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.use("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 3001;
app.listen(port, async (req, res) => {
  console.log("server is running on port " + port);
});