const express = require('express');
const BodyParser = require('body-parser');
// const os = require('os');
const router = require('./router/router');

const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));
app.use('/api/v1', router);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
