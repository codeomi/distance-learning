const express = require("express");
const {
  getColleges, addCollegeData, deleteCollege,
  
} = require("../controllers/exampleController.js");

const router = express.Router();
// API routes
router.get("/allcolleges", getColleges);
router.post("/addcollege", addCollegeData);
router.delete("/deletecollege", deleteCollege);




module.exports = router;
