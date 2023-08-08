const { Sequelize, DataTypes, Model } = require('sequelize');

const USER_TABLE = 'users';

const UserModel = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    codeVerification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verificated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    status: {
        type:DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        field:'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
    }
}

class User extends Model {
    static associate (){

    }

    static config (sequelize) {
        return {
            sequelize,
            modelName: 'User',
            tableName : USER_TABLE,
            timestamps: false
        }
    }
};

module.exports = {
    USER_TABLE,
    UserModel,
    User
}