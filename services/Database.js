import Sequelize from 'sequelize';
import 'dotenv/config.js';

/**
 * Initializes the database connection using the .env parameters
 */
const database = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST
  }
);

export default database;