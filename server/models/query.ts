const mysqlPool = require("../db/config.ts");

module.exports = {
  queryParams: async (query) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Connection DB
        const pool = await mysqlPool;
        // Create Connection
        const connection = await pool.getConnection(async (err, con) => {
          try {
            // 전달받은 쿼리 실행
            await con.query(query, (err, result) => {
              // DisConnection DB
              pool.releaseConnection(con);
              // return Result
              resolve(result);
            });
          } catch (err) {
            pool.releaseConnection(con);
            reject(err);
          }
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};
