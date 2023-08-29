const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,
  },
});


const initDb = async () => {
    // await pool.query(`
    //   CREATE TABLE IF NOT EXISTS users (
    //     id SERIAL PRIMARY KEY,
    //     username TEXT NOT NULL,
    //     email TEXT UNIQUE NOT NULL,
    //     password TEXT NOT NULL
    //   );
    // `);
  };

    initDb();


module.exports = {
  query: (text, params) => pool.query(text, params),
};