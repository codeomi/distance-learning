const ErrorHandler = require("../utils/ErrorHandler.js");
const mysql = require("mysql");

const pool = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "sqluser",
  password: "password",
  database: "simpli_distance",
});

//get all colleges
exports.getColleges = (req, res, next) => {
  pool.query("SELECT * FROM college_details", (error, results) => {
    if (error) {
      console.error(error);
      return next(new ErrorHandler("Error fetching colleges", 500));
    }

    res.send({ success: "true", results });
  });
};

//add data
exports.addCollegeData = (req, res, next) => {
  const {
    name,
    email,
    collegeDetails,
    collelgeLogo,
    collegeImage,
    collegeCourses,
  } = req.body;
  const qr1 = `SELECT * FROM college_details WHERE email=? or college_name=?`;
  //querry to check if data already exist or not
  pool.query(qr1, [email, name], (err, results) => {
    if (err) throw err;
    else {
      if (results.length > 0) {
        return next(new ErrorHandler("College already exit in database", 400));
      } else {
        //query to add data since it does not exist
        const qr2 = ` INSERT INTO college_details(college_name, email, college_details, college_logo, college_image, college_courses)
        VALUES (?, ?, ?, ?, ?, ?)`;
        pool.query(
          qr2,
          [
            name,
            email,
            collegeDetails,
            collelgeLogo,
            collegeImage,
            collegeCourses,
          ],
          (err, results, table) => {
            if (err) throw err;
            else {
              res.send({ success: "true", results, table });
            }
          }
        );
      }
    }
  });
};

//Delete a row from table
exports.deleteCollege = (req, res, next) => {
  const { email } = req.body;

  const qr1 = `SELECT * FROM college_details WHERE email=?`;
  const qr2 = `DELETE FROM college_details WHERE email=?`;

  pool.query(qr1, [email], (err, results) => {
    if (results.length===0){
      return next ( new ErrorHandler("College does not exist",404))
    }
    else {
      pool.query(qr2,[email],(err,results)=>{
        if(err) throw err
        else{
          return next(new ErrorHandler("college deleted successfully",200))
        }
      })
    }
  });
};
