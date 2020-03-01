// const db = require('../db/db');
const axios = require('axios');

// eslint-disable-next-line no-unused-vars
const getbalance = (req, res) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // eslint-disable-next-line quote-props
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDhhMzUyMjRkODExMzUwN2M3NTIxYWMiLCJpYXQiOjE1NzE5MTQ0NzJ9.-15wwrtTbZc2kr5wCFkF3ET76I5SuB55mKdF9xBm9Hg'
    }
  };
  const data = {
    account: req.body.account
  };
  axios.post('https://dev-api.okra.ng/v1/products/total-debits-credits', data, options)
    .then((response) => {
      console.log('resd', response.data.data.result);
      return res.json({
        status: 200,
        message: ' credit_debit successfully fetched',
        data: response.data.data.result
      });
    }).catch(err => console.log('error', err));
};
module.exports = getbalance;
