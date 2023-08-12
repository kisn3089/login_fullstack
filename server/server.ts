const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./db/db.env") });
const mysql = require("./db/config.ts");

mysql.getConnection((error, connection) => {
  const sql = "SELECT * FROM User";
  connection.query(sql, (err, con) => {
    if (err) console.log("query err: ", err);
    console.log("query result: ", con);
  });
  if (error) {
    console.error("Error getting connection:", error);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  if (req.body?.id === "kisn3089") res.send("Success Login!");
  else res.status(400).send("No User!");
});

app.listen(port, () => {
  console.log(`server port Num is ${port}`);
});
