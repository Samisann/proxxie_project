const express = require('express');

const router = express.Router();

// import controllers

router.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

module.exports = router;