const Example = require('../models/exampleModel.js');

// Controller methods
exports.getExamples = async (req, res) => {
  try {
    const examples = await Example.create(req.body);
    res.json(examples);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createExample = async (req, res) => {
  try {
    const newExample = new Example(req.body);
    await newExample.save();
    res.json(newExample);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
