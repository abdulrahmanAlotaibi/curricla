const express = require("express");
const router = express.Router();
const path = require("path");

// Index Page
router.get("/", (req, res) => {
  res.render(path.join("full-stack", "index"));
});

// MERN Page
router.get("/mern", (req, res) => {
  res.render(path.join("full-stack", "pages", "mern"));
});

module.exports = router;
