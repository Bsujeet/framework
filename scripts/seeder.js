'use strict';

const seeder = require('mongoose-seed');
const config = require('../config');
const logger = require('../logger');
const proxmox = require('../third-party-worker/proxmox-inventory');
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
        proxmox.run((err, taskState, runtimeState, outputParameters) => {
            if (err) {
                //reject(err);
                console.log("Error in third party module " + err);
            } else {
                let finalDataTOPopulateModel;
                for (let index = 0; data.length > index; index++) {
                    if (data[index].model === 'Inventory') {
                        for (let indexDoc = 0; data[index].documents.length > indexDoc; indexDoc++) {
                            if (data[index].documents[indexDoc].name === 'storage') {
                                data[index].documents[indexDoc].total_qty = (outputParameters.rootfs.total / (1024 * 1024 * 1024));
                                data[index].documents[indexDoc].available_qty = (outputParameters.rootfs.avail / (1024 * 1024 * 1024));
                                data[index].documents[indexDoc].researved_qty = 0;
                            } else if (data[index].documents[indexDoc].name === 'memory') {
                                data[index].documents[indexDoc].total_qty = (outputParameters.memory.total / (1024 * 1024));
                                data[index].documents[indexDoc].available_qty = (outputParameters.memory.free / (1024 * 1024));
                                data[index].documents[indexDoc].researved_qty = 0;
                            }
                        }
                        finalDataTOPopulateModel = data;
                    }
                }
                /*resolve({
                    taskState,
                    runtimeState,
                    outputParameters
                });*/
                if (!finalDataTOPopulateModel) {
                    finalDataTOPopulateModel = data;
                }
                seeder.populateModels(finalDataTOPopulateModel, () => {
                    logger.info('Seeder done with loading data');
                    process.exit(0);
                });
            }
        });

        /* seeder.populateModels(data, () => {
            logger.info('Seeder done with loading data');
            process.exit(0);
        });*/
    });
});
