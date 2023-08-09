const { Error } = require('sequelize');

function logErrors(err, req, res, next) {
    next(err);
}

function errorHanlder(err, req, res, next) {
    res.status(500).json({
        statuscode : 500,
        message: err.message,
		stack: err.stack,
    })
}

function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
        const { payload } = err;
        res.status(payload.statusCode).json(payload);
    }
    next();
}

function ormErrorHandler() {
    return (err, req, res, next) => {
        if (err instanceof Error) {
            res.status(409).json({
                statusCode: 409,
                message: err.message,
                error: err.erros
            })
        };
        next();
    }
}

module.exports = {
    boomErrorHandler,
    ormErrorHandler,
    logErrors,
    errorHanlder
}