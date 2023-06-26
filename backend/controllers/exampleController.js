const College = require("../models/exampleModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");

// Controller methods
exports.getCollege = async (req, res, next) => {
  const colleges = await College.find();
  if (!colleges) {
    return next(new ErrorHandler("No Colleges to show", 400));
  }

  res.status(200).json({ success: true, colleges: colleges });
};

exports.createCollege = async (req, res) => {
  const college = await College.create(req.body);
  if (!college) {
    return next(new ErrorHandler("Internal Server Error occured"), 400);
  }
  res.status(200).json({ success: true, college: college });
};
