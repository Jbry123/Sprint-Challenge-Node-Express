const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

const { getCoinPreviousDay, getCoinCurrent } = require('../models/mCoin.js');

router.get('/', (req, res) => {
  getCoinPreviousDay() //get the coin data
  .then(rate => [rate[i]])
  .then(rate => {
    res.status(STATUS_SUCCESS);
    res.send( {rate: prices} );
  })
  .catch(err => {
    console.log(err);
    res.status(STATUS_USER_ERROR);
    res.send( {err: 'Error fetching url'} );
  });
});

module.exports = router;