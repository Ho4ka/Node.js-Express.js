const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extend: false}));

app.use('/add-product', (req, res, next) => {
    res.send("<form action='/product' method='post'> <input type='text' name='title'><button type='submit'>Add product</button></form>");
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send("<h1>Hello from express js</h1>");
});

app.listen(3000);
