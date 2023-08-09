function validatorHandler(schema, property){
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, {abortEarly: false});
        if (error) {
            res.status(409).json({
                statusCode: 409,
                message: error.message,
                payload: error
            })
        }
    }
}

module.exports = validatorHandler;