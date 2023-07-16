const express = require("express");
const {
  getColleges, addCollegeData, deleteCollege, updateCollege,
  
} = require("../controllers/exampleController.js");

const router = express.Router();
// API routes
router.get("/allcolleges", getColleges);
router.post("/addcollege", addCollegeData);
router.delete("/deletecollege", deleteCollege)
router.put("/updatecollege/:email",updateCollege);




module.exports = router;
