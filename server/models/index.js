'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
console.log(require(__dirname + '/../config/config.js'))
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
console.log('use database', config.database)

if (config.use_env_variable) {
  console.log("here")
  sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  console.log("there")

  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.authenticate().then( () => {
  console.log('connection to database succesfull')
}).catch((err) => {
  console.error('Unable to connect to database:', err);
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.model("User").findAll()
    .then(player => console.log(JSON.stringify(player)))
    .catch(err => console.log("error! - " + err))

module.exports = db;
