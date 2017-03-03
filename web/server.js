'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware');
const router = require('./router');

const app = express();

// Add all the routes with methods, which doesn't require authentication, to this list
const unprotectedRoutes = [
    'POST:/api/v1/login',
    'OPTIONS:/api/v1/login',
    'OPTIONS:/api/v1/request',
    'POST:/api/v1/user'];

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(bodyParser.json()); // support json encoded bodies
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'X-Requested-With,content-type, Authorization,username,x-access-token');
    next();
});
app.use(middleware.tokenValidation({ unprotectedURLs: unprotectedRoutes }));

app.use(router);

app.use(middleware.errorHandling);

module.exports = app;
