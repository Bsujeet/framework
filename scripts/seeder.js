'use strict';

const seeder = require('mongoose-seed');
const config = require('../config');
const logger = require('../logger');
const data = require('./seed-data/data');

// Connect to MongoDB via Mongoose
const connectionString = `mongodb://${config.MongoDB.host}:${config.MongoDB.port}/${config.MongoDB.db}`;
seeder.connect(connectionString, (err) => {
    if (err) {
        logger.error('Unable to connect to mongodb. Error', err);
        process.exit(0);
    }
    logger.info('Seeder connected to mongodb');
    // Load Mongoose models
    seeder.loadModels([
        './models/inventory',
        './models/job',
        './models/request',
        './models/user',
        './models/resource'
    ]);
    logger.info('Seeder loaded the models');
    // Clear specified collections
    seeder.clearModels(['Inventory', 'Job', 'Request', 'User', 'Resource'], () => {
        logger.info('Seeder cleared collections for the models');
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, () => {
            logger.info('Seeder done with loading data');
            process.exit(0);
        });
    });
});