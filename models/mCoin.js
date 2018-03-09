const express = require('express');
const router = express.Router();

const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;
const YESTERDAY_DATA_URL = 'https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday';

const CURRENT_DATA_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

function getCoinPreviousDay() {
    return new Promise((resolve, reject) => {
      const searchUrl = YESTERDAY_DATA_URL;

      fetch(searchUrl)
        .then(rate => rate.json())
        .then(ids => {
          resolve(ids);
        })
        .catch(err => {
          reject(err);
        });
    });
}

function getCoinCurrent() {
    return new Promise((resolve, reject) => {
      const searchUrl = CURRENT_DATA_URL;

      fetch(searchUrl)
        .then(rate => rate.json())
        .then(rate => {
          resolve(rate);
        })
        .catch(err => {
          reject(err);
        });
    });
}

function compareCoinRates() {
    
}

module.exports = {
    getCoinPreviousDay,
    getCoinCurrent
}