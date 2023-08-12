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
  res.send("hello");
});

app.post("/login", async (req, res) => {
  // Email 중복 검사
  // 커넥션 닫지 않고 바로 생성 쿼리 실행하는 방법 찾기
  const { email, pw } = await req.body;
  const { status, message } = await services.checkEmail(email);
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log(`server port Num is ${port}`);
});
