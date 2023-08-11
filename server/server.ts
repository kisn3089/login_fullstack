const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send("hello");
});

app.post("/login", (req, res) => {
  if (req.body?.id === "kisn3089") res.send("Success Login!");
  else res.send("No User!");
});

app.listen(port, () => {
  console.log(`server port Num is ${port}`);
});
