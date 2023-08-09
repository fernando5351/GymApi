const validatorHandler = require("../../middleware/validatorHandler");
const { createUser, updateUser, getUser } = require("../schemas/user.schema");
const UserService = require("../services/user.service");

const router = require("express").Router();
const service = new UserService();

router.get('/',
    async(req, res, next) => {
        try {
            const users = await service.readAll();
            res.status(200).json({
                statuscode: 200,
                message: 'all records fetched',
                data: users
            });
        } catch (error) {
            next(error);
        }
    }
);

router.post('/register',
    validatorHandler(createUser, 'body'),
    async (req, res, next) => {
        try {
            const data = req.body;
            const user = await service.create(data);
            res.status(201).json({
                statuscode: 201,
                message: 'user created',
                data: user
            });
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id',
    validatorHandler(getUser, 'params'),
    validatorHandler(updateUser, 'body'),
    async (req, res, next) => {
        const  { id } = req.params;
        const data = req.body;
        const user = await service.update(id, data);
        res.status(202).json({
            statuscode: 202,
            message: 'user updated',
            data: user
        });
    }
);

router.delete('/:id',
    validatorHandler(getUser, 'params'),
    async (req, res, next) => {
        try {
            const  { id } = req.params;
            await service.delete(id);
            res.status(202).json({
                statuscode: 202,
                message: 'user updated',
                data: `Record with id ${id} deleted`
            });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;