const express =  require('express');
const port = process.env.PORT || 300;
const { logErrors, errorHanlder, ormErrorHandler, boomErrorHandler } = require('../middleware/errorhanlder');
const routesManagement = require('./routes');
const cors = require('cors');
const boom = require('@hapi/boom');

const app = express();

app.set('port', port);
app.use(express.json());

const whitelist = ['http://localhost:3000'];
const options = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error(boom.unauthorized('Access denied due to CORS security restrictions')));
		}
	},
};
app.use(cors(options));

routesManagement(app);

app.use(logErrors);
app.use(errorHanlder);
app.use(ormErrorHandler);
app.use(boomErrorHandler);

module.exports = app;