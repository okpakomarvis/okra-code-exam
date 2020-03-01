const express = require('express');
const getbalance = require('../userinfo/userfo');
const debitCredit = require('../userinfo/debit');

const router = express.Router();

router.get('/userinfo', getbalance);
router.post('/debit_credit', debitCredit);

module.exports = router;
