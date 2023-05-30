const mongoose = require("mongoose");

// Define example schema
const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

// Create example model
const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
