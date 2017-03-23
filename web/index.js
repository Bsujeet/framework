'use strict';

const mongoose = require('mongoose');
// const logger = require('winston');
const logger = require.main.require('./logger');
const config = require('../config');
const app = require('./server');


const port = config.Server.port;

const connectionUrl = `mongodb://${config.MongoDB.host}:${config.MongoDB.port}/${config.MongoDB.db}`;
mongoose.connect(connectionUrl, {
        server: {
            poolSize: 10
        }
    },
    (err) => {
        if (err) {
            return logger.error('Unable to connect to database. Error:', err);
        }
        app.listen(port, () => {
                logger.info('App is listening on port:', port);
            })
            .on('error', (err) => {
                if (err.errno === 'EADDRINUSE') {
                    logger.error('Error happened during server start. Port Busy');
                } else {
                    logger.error('Error happened during server start', err);
                }
            });
    }
);