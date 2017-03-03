'use strict';

const EventEmitter = require('events');
const logger = require('winston');

const emitter = new EventEmitter();

emitter.on('uncaughtException', (err) => {
    logger.error(err);
});

module.exports = emitter;
