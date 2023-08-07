const app = require('./src/app');
const { config } = require('./config');

app.listen(app.get('port'), ()=> {
    try {
        config.isProduction ? console.log(`Server is running on http://localhost:${app.get('port')}`) : console.log();;
    } catch (error) {
        console.log(`There was an error in: ${error}`);
    }
})