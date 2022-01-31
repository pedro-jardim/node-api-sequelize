require("dotenv").config();

const configSQLSERVER = {
  dialect: process.env.DB_MS_DIALECT,
  host: process.env.DB_MS_HOST,
  database: process.env.DB_MS_DATABASE,
  username: process.env.DB_MS_USER,
  password: process.env.DB_MS_PASSWORD,
  define: {
    timestamps: true,
    undescored: true
  }
}

const configMYSQL = {
  dialect: process.env.DB_MYS_DIALECT,
  host: process.env.DB_MYS_HOST,
  database: process.env.DB_MYS_DATABASE,
  username: process.env.DB_MYS_USER,
  password: process.env.DB_MYS_PASSWORD  
}

module.exports = { configSQLSERVER, configMYSQL };