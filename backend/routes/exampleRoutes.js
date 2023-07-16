const express = require("express");
const {
  getColleges, addCollegeData,
  
} = require("../controllers/exampleController.js");

const router = express.Router();
// API routes
router.get("/allcolleges", getColleges);
router.post("/addcollege", addCollegeData);




module.exports = router;
