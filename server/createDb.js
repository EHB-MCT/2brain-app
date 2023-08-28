const { Pool } = require('pg');

// Connect to the postgres database to create the new database
const rootPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgress',
  port: 5432,
});

const createDatabase = async () => {
  try {
    const dbName = '2brainDB';
    const checkDbExists = await rootPool.query(`SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('${dbName}')`);
    
    if (checkDbExists.rows.length === 0) {
      await rootPool.query(`CREATE DATABASE ${dbName}`);
      console.log(`Database ${dbName} created.`);
    } else {
      console.log(`Database ${dbName} already exists.`);
    }
  } catch (error) {
    console.error(`Failed to create database: ${error.message}`);
  } finally {
    rootPool.end();
  }
};

// Call createDatabase function before initializing your application
createDatabase();
