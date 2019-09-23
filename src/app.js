const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
// Initilize application
const app = express();

// Load Routes
const curriculum = require("./routes/curriculum");

// Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

// Static folder
app.use(express.static(path.join("public")));

// Index Page
app.get("/", (req, res) => {
  res.render("index");
});

// About Page
app.get("/about", (req, res) => {
  res.render("about");
});

// Use Route
app.use("/curriculum", curriculum);

// Not Found Page
app.use("/", (req, res) => {
  res.render("error")
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
