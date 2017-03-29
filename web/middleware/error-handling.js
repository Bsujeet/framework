'use strict';

const logger = require.main.require('./logger');

function appErrorHandler(err, req, res) {
    logger.error('Error happened during server start', err.stack);
    res.status(200).send('Something broke!');
    res.end();
}

module.exports = appErrorHandler;
