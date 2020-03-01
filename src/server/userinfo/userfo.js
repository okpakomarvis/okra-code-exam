const axios = require('axios');

// eslint-disable-next-line no-unused-vars
const getbalance = (_req, res) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // eslint-disable-next-line quote-props
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDhhMzUyMjRkODExMzUwN2M3NTIxYWMiLCJpYXQiOjE1NzE5MTQ0NzJ9.-15wwrtTbZc2kr5wCFkF3ET76I5SuB55mKdF9xBm9Hg'
    }
  };
  axios.post('https://dev-api.okra.ng/v1/products/balances', '', options)
    .then((response) => {
      console.log('response', response.data.data.balances[0].available_balance, response.data.data.balances[0].id);
      return res.json({
        status: 200,
        message: ' balance successfully fetched',
        data: response.data.data.balances
      });
    }).catch(err => console.log('error', err));
};
module.exports = getbalance;
