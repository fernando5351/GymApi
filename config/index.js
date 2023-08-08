require('dotenv').config();

const config = {
    isProduction: process.env.environment === 'production',
    db: {
        name: process.env.DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    },
}

module.exports = { config };
