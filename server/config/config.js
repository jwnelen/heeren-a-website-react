require('dotenv').config({path: './server/.env'});

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_URL,
    host: process.env.HOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  },
  production: {
    use_env_variable: "DATABASE_URL",
    "dialect": "postgres"
  }
}
