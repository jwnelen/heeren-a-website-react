// TODO:
// https://stackabuse.com/adding-a-postgresql-database-to-a-node-js-app-on-heroku/

require('dotenv').config({path: './server/config/.env'});

const {Sequelize, Model, DataTypes} = require('sequelize');

// let sequelize;
// console.log("process", process.env.NODE_ENV)
//
// if (process.env.NODE_ENV === 'development') {
//   console.log("process env is development")
//   sequelize = new Sequelize(
//       process.env.DATABASE_URL,
//       process.env.USER,
//       process.env.PASSWORD, {
//         host: process.env.HOST,
//         dialect: 'postgres',
//       })
// } else {
//   console.log("process env is production")
//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     ssl: {
//       rejectUnauthorized: false
//     }
//   })
// }

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require(".//user.model.js")(sequelize, Sequelize);
db.players = require(".//player.model.js")(sequelize, Sequelize);

module.exports = db;

