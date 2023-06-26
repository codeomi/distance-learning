const express = require("express");
const {
  createExample,
  getExamples,
} = require("../controllers/exampleController.js");

const router = express.Router();
// API routes
router.get("/allcolleges", getColleges);
router.post("/create", createExample);

module.exports = router;
