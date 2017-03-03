'use strict';

const logger = require('winston');

function appErrorHandler (err, req, res) {
    logger.error('Error happened during server start', err.stack);
    res.status(500).send('Something broke!');
    res.end();
}

module.exports = appErrorHandler;
