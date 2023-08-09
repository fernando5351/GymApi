const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

class UserService {

    async create(data) {
        const hash = await bcrypt.hash(data.password, 8);
        const dto = {
            ...data,
            password: hash
        }
        const user = await models.User.create(dto);
        return user;
    }

    async readAll(){
        const users = await models.User.findAll();
        return users;
    }

    async findByPk(id) {
        const user = await models.User.findByPk(id);
        if (!user){
            throw boom.notFound('no records found');
        }
        return user;
    }

    async update(id, data) {
        const user = await this.findByPk(id);
        const update = await user.update(data);
        console.log(update);
        const userUpdated = await this.findByPk(id);
        return userUpdated;
    }

    async delete(id) {
        const user = await this.findByPk(id);
        await user.destroy();
    }
}

module.exports = UserService;
