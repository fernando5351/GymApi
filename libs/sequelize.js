const { Sequelize } = require('sequelize');
const { config } =  require('../config');
const setupModels = require('../database/models');
const db = config.db;

const USER = encodeURIComponent(db.user);
const PASSWORD = encodeURIComponent(db.password);

const URI = `postgres://${USER}:${PASSWORD}@${db.host}:${db.port}/${db.name}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging : config.isProduction ? false : console.log
});

setupModels(sequelize);

module.exports = sequelize;