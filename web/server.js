'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const middleware = require('./middleware');
const router = require('./router');


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// view engine setup
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static('public'));

global.activeSocketUser = [];

// Socket for user created
io.on('connection', (socket) => {
    if (socket.handshake.query.token) {
        console.log('socket connected');
        const socketToken = socket.handshake.query.token;
        global.activeSocketUser[socketToken] = socket;
    }
    socket.on('disconnect', () => {
        if (socket.handshake.query.token) {
            console.log('socket disconnected');
            const socketToken = socket.handshake.query.token;
            global.activeSocketUser[socketToken] = null;
        }
    })
});


// Add all the routes with methods, which doesn't require authentication, to this list
const unprotectedRoutes = [
    'POST:/api/v1/login',
    'OPTIONS:/api/v1/login',
    'OPTIONS:/api/v1/request',
    'GET:/',
    'POST:/api/v1/user'
];

app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use(bodyParser.json()); // support json encoded bodies
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    res.setHeader('Access-Control-Allow-Headers',
        'X-Requested-With,content-type, Authorization,username,x-access-token');
    next();
});
app.use(middleware.tokenValidation({
    unprotectedURLs: unprotectedRoutes
}));

app.use(router);

app.use(middleware.errorHandling);

module.exports = server;