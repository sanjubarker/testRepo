const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const execute = require('./src/execute') 

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', execute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
