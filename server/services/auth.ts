const pool = require("../models/query.ts");

module.exports = {
  checkEmail: async (email) => {
    const query = `SELECT * FROM User WHERE email="${email}"`;
    try {
      const result = await pool.queryParams(query);
      console.log("result: ", result);

      if (result.length === 0)
        return { status: 200, message: "사용가능한 이메일입니다." };
      else return { status: 400, message: "중복된 계정입니다." };
    } catch (err) {
      return err;
    }
  },
};
