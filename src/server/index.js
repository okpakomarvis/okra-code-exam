const express = require('express');
// const os = require('os');
const router = require('./router/router');

const app = express();

app.use(express.static('dist'));
app.use('/api/v1', router);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
