const app = require('./app');
const config = require('./config/app.config');

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server is running in ${config.env} mode on port ${PORT}`);
});
