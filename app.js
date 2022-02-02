const express = require("express");

const hbs = require("hbs");
const path = require("path");

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//Routes

app.get("/", (req, res) => {
  res.render("home-page");
});

app.get("/about", (req, res) => {
  res.render("about-page");
});

app.get("/work", (req, res) => {
  res.render("works-page");
});

app.get("/photo-gallery", (req, res) => {
  res.render("photo-gallery-page");
});

app.listen(3000, () => console.log("on port 3000"));
