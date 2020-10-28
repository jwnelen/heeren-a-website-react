require('dotenv').config({path: './config/.env'});

const Sequelize = require('sequelize');

let sequelize;
if(process.env.NODE_ENV === 'development') {
	sequelize = new Sequelize(
		process.env.DATABASE_URL,
		process.env.USER,
		process.env.PASSWORD, {
			host: process.env.HOST,
			dialect: 'postgres',
		})
} else {
	sequelize = new Sequelize(process.env.DATABASE_URL)
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.players = require("../models/player.model.js")(sequelize, Sequelize);

module.exports = db;

