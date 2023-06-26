const mongoose = require("mongoose");

// Define example schema
const collegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  courses: {
    type: String,
    required: true,
  },
  collegePhoto: {
    type: String,
    required: true,
  },
});

// Create example model
const College = mongoose.model("College", collegeSchema);

module.exports = College;
