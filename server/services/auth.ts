const pool = require("../models/query.ts");
const cryp = require("crypto");

module.exports = {
  checkEmail: async (email) => {
    const query = `SELECT * FROM User WHERE email="${email}"`;
    try {
      const result = await pool.queryParams(query);

      if (result.length === 0)
        return { status: 200, message: "사용가능한 이메일입니다." };
      else return { status: 400, message: "이미 존재하는 이메일입니다." };
    } catch (err) {
      return err;
    }
  },

  createUser: async (name, email, password) => {
    const fields = "username, email, password, salt";
    const questions = "?, ?, ?, ?";
    const salt = Math.round(new Date().valueOf() * Math.random()) + "";
    const hashPassword = cryp
      .createHash("sha512")
      .update(password + salt)
      .digest("base64");
    const values = [name, email, hashPassword, salt];
    const query = `INSERT INTO User (${fields}) VALUES (${questions})`;

    try {
      const result = await pool.queryParamsArr(query, values);
      console.log("Create Result: ", result);
      return { status: 200, message: "회원가입이 완료되었습니다." };
    } catch (err) {
      return err;
    }
  },
};
