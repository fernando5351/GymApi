const { User, UserModel } = require('./user.model');

function setupModels(sequelize) {
    User.init(UserModel, User.config(sequelize));
}

module.exports = setupModels;