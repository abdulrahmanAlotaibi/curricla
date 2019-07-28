const express = require("express");
const router = express.Router();
const path = require("path");
const frontEnd = require("./front-end");
const backEnd = require("./back-end");
const fullStack = require("./full-stack");

router.get("/", (req, res) => {
  res.render("curriculum");
});


// Use Routes
router.use("/front-end", frontEnd);
router.use("/back-end", backEnd);
router.use("/full-stack", fullStack);

module.exports = router;
