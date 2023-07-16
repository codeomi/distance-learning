const mysql = require("mysql");

const pool = mysql.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: "sqluser",
  password: "password",
  database: process.env.DB_DATABASE,
});


pool.connect((err) => {
  if (err) throw err;
  console.log("Connection created..!!");
});

exports.module = pool;
