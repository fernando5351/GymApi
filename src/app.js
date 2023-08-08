const express =  require('express');
const port = process.env.PORT || 300;
const { logErrors, errorHanlder, ormErrorHandler, boomErrorHandler } = require('../middleware/errorhanlder');
const routesManagement = require('./routes');

const app = express();

app.set('port', port);
app.use(express.json());

routesManagement(app);

app.use(logErrors);
app.use(errorHanlder);
app.use(ormErrorHandler);
app.use(boomErrorHandler);

module.exports = app;