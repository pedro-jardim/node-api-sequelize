require("dotenv").config();

const config =
{
  development: {
    dialect: process.env.DB_MYS_DIALECT,
    host: process.env.DB_MYS_HOST,
    database: process.env.DB_MYS_DATABASE,
    username: process.env.DB_MYS_USER,
    password: process.env.DB_MYS_PASSWORD  
  },
  test: {
    dialect: process.env.DB_MYS_DIALECT,
    host: process.env.DB_MYS_HOST,
    database: process.env.DB_MYS_DATABASE,
    username: process.env.DB_MYS_USER,
    password: process.env.DB_MYS_PASSWORD  
  },
  production: {
    dialect: process.env.DB_MYS_DIALECT,
    host: process.env.DB_MYS_HOST,
    database: process.env.DB_MYS_DATABASE,
    username: process.env.DB_MYS_USER,
    password: process.env.DB_MYS_PASSWORD  
  }
}

module.exports = config;