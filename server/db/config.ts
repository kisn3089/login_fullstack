const mysql = require("mysql");

const config = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: "root",
  // user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: process.env.CONNECTIONLIMIT,
};

module.exports = mysql.createPool(config);
