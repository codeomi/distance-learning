const express = require("express");
const {
  createCollege,
  getCollege,
  getCollegeById,
  deleteCollege,
} = require("../controllers/exampleController.js");

const router = express.Router();
// API routes
router.get("/allcolleges", getColleges);
router.post("/createcollege", createCollege);
router.get("/college/:id", getCollegeById);
router
.update("/college/:id", updateCollege)
.delete("/college/:id", deleteCollege)



module.exports = router;
