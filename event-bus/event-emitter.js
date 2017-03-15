'use strict';

const EventEmitter = require('events');

const logger = require.main.require('./logger');

const emitter = new EventEmitter();

emitter.on('uncaughtException', (err) => {
    logger.error(err);
});

module.exports = emitter;
