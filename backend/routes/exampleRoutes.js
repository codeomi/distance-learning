const express = require("express");
const {
  createExample,
  getExamples,
} = require("../controllers/exampleController.js");

const router = express.Router();
// API routes
router.get("/", getExamples);
router.post("/create", createExample);

module.exports = router;
