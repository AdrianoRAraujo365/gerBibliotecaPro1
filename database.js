require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'biblioteca_pro',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'senac',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  dialect: 'mysql',
  logging: false,
};
