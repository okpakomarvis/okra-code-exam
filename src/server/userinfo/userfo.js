const db = require('../db/db');

console.log('db', db);
const getuser = async (req, res) => {
  try {
    return res.json({
      status: 200,
      message: ' user info successfully fetched',
      data: db
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: 503,
      error: err
    });
  }
};
module.exports = getuser;
