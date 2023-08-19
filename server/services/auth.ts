const pool = require("../models/query.ts");

module.exports = {
  checkEmail: async (email) => {
    const query = `SELECT * FROM User WHERE email="${email}"`;
    try {
      const result = await pool.queryParams(query);
      console.log("Check Result: ", result);

      if (result.length === 0)
        return { status: 200, message: "사용가능한 이메일입니다." };
      else return { status: 400, message: "중복된 계정입니다." };
    } catch (err) {
      return err;
    }
  },

  createUser: async (name, email, password) => {
    const fields = "username, email, password";
    const questions = "?, ?, ?";
    const values = [name, email, password];
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
