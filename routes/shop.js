const express = require('express');
const rootDir = require('../util/path');
const path = require('path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    res.render("shop");
});

module.exports = router;