const express = require("express");
const router = express.Router();
const path = require("path");

// Index Page
router.get("/", (req, res) => {
  res.render(path.join("back-end", "index"));
});

// Node & Express Page
router.get("/node", (req, res) => {
  res.render(path.join("back-end", "pages", "node"));
});

// Mongodb Page
router.get("/mongodb", (req, res) => {
  res.render(path.join("back-end", "pages", "mongodb"));
});
module.exports = router;
