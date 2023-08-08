const express =  require('express');
const port = process.env.PORT || 300;

const app = express();

app.set('port', port);

module.exports = app;