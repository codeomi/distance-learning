const College = require("../models/exampleModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");

//get all colleges
exports.getColleges = async (req, res, next) => {
  const colleges = await College.find();
  if (!colleges) {
    return next(new ErrorHandler("No Colleges to show", 400));
  }

  res.status(200).json({ success: true, colleges: colleges });
};

//create college
exports.createCollege = async (req, res) => {
  const college = await College.create(req.body);
  if (!college) {
    return next(new ErrorHandler("Internal Server Error occured"), 400);
  }
  res.status(200).json({ success: true, college: college });
};

//get single college by id
exports.getCollegeById = async (req, res, next) => {
  const { id } = req.params.id;
  const college = await College.findById(id);
  if (!college) {
    return next(new ErrorHandler("Internal Server Error occured"), 400);
  }
  res.status(200).json({ success: true, college: college });
};

//update College by id
exports.updataCollege = async (req, res, next) => {
  const { name, description, logo, courses, collegePhoto } = req.body;
  const newData = {
    name: name,
    description: description,
    logo: logo,
    courses: courses,
    collegePhoto: collegePhoto,
  };
  const college = await College.findByIdAndUpdate(name, req.params.id);
  if (!college) {
    return next(
      new ErrorHandler(`College with ${req.params.id} does not exit`, 400)
    );
  }
  await college.save();
  res.status(200).json({ success: true, college: college });
};


//delete college by id
exports.deleteCollege = async (req, res, next) => {
  const { id } = req.params.id;
  const college = await College.findByIdAndDelete(id);
  if (!college) {
    return next(new ErrorHandler("Internal Server Error occured"), 400);
  }
  res.status(200).json({ success: true, message: "College deleted" });
};
