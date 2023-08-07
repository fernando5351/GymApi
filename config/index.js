require('dotenv').config();

const config = {
    isProduction: process.env.environment === 'production',
    db: {},
}

module.exports = { config };
