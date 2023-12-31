const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./db/db.env") });
const services = require("./services/auth.ts");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.status(200).end();
});

app.get("/join", (req, res) => {
  res.status(200).end();
});

app.post("/login", async (req, res) => {
  const { email, password } = await req.body;
  const { status, message } = await services.findUser(email, password);
  res.status(status).send(message);
});

app.post("/join", async (req, res) => {
  const { name, email, password } = await req.body;
  const { status: checkStatus, message: checkMessage } =
    await services.checkEmail(email);
  if (checkStatus === 400) res.status(checkStatus).send(checkMessage);
  if (checkStatus === 200) {
    const { status, message } = await services.createUser(
      name,
      email,
      password
    );
    res.status(status).send(message);
  }
});

app.listen(port, () => {
  console.log(`server port Num is ${port}`);
});
