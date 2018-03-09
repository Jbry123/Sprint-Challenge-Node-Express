const express = require('express');
const app = express();
const coinController = require('../controllers/cCoin');
const PORT = 3000;

app.use(coinController);

app.listen(PORT, err => {
    if (err) {
        console.log(`Error starting server: ${err}`);
    } else {
        console.log(`App listening on port ${PORT}`);
    }
});
