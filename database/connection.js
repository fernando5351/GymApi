const { config } =  require('../config');
const db = config.db;

const USER = encodeURIComponent(db.user);
const PASSWORD = encodeURIComponent(db.password);

const URI = `postgres://${USER}:${PASSWORD}@${db.host}:${db.port}/${db.name}`;

module.exports = {
    development: {
        url: URI,
        dialect: 'postgres'
    },
    production: {
        url: URI,
        dialect: 'postgres'
    }
}