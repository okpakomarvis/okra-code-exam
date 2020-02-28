const express = require('express');
const getuserinfor = require('../userinfo/userfo');

const router = express.Router();

router.get('/userinfo', getuserinfor);


module.exports = router;
