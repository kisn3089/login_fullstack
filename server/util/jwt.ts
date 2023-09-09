const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_KEY;

module.exports = {
  createToken: async (payload) => {
    const secretKey = process.env.JWT_KEY;
    return await jwt.sign(payload, secretKey, { expiresIn: "1h" });
  },

  decodeToken: async (token) => {
    return jwt.verify(token, secretKey);
  },
};
