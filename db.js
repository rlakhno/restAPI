const Pool = require('pg').Pool;

const pool = new Pool({
  user: "labber",
  host: "localhost",
  database: "students",
  password: "labber",
  port: 5432,
});

module.exports = pool;