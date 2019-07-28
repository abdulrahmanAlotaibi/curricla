const express = require("express");
const router = express.Router();
const path = require("path");

// Index Page
router.get("/", (req, res) => {
  res.render(path.join("front-end", "index"));
});

// Web 101
router.get("/web-101", (req, res) => {
  res.render(path.join("front-end", "pages", "web101"));
});

// HTML Page
router.get("/html", (req, res) => {
  res.render(path.join("front-end", "pages", "html"));
});

// CSS Page
router.get("/css", (req, res) => {
  res.render(path.join("front-end", "pages", "css"));
});

// Javascript Page
router.get("/javascript", (req, res) => {
  res.render(path.join("front-end", "pages", "javascript"));
});

// React Page
router.get("/react", (req, res) => {
  res.render(path.join("front-end", "pages", "react"));
});

module.exports = router;