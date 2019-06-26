'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const env       = process.env.NODE_ENV || 'development';
const config    = require('./default.json')[env];
const pathToModels = (`${__dirname}/../models/`);
let db          = {};
let sequelize   = {};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(pathToModels)
  .filter(file => (file.indexOf('.') !== 0) && file !== basename && file.slice(-3) === '.js') // true
  .map(file => {
    const model = sequelize['import'](path.join(pathToModels, file));
    db[model.name] = model;
  });

Object.keys(db).map(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
