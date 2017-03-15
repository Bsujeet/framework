'use strict';

const logger = require.main.require('./logger');
const Inventory = require('../models/inventory');
const Resource = require('../models/resource');

function removeResearvation(resourceid, callback) {
    Resource.findById(resourceid, {}, (err, resource) => {
        if (err) {
            logger.error('Error occured in getting resource. Error', err);
            return callback(err);
        }
        undoReservationAsync(resource.inventory_items, (err) => {
            if (err) {
                logger.error('Error occured in removing reservation. Error', err);
                return callback(err);
            }
            resource.remove((err) => {
                if (err) {
                    logger.error('Error occured in deleting resource. Error', err);
                    return callback(err);
                }
                return callback(null, true);
            });
        });
    });
}

function assignResource(resourceid, additionalInfo, callback) {
    Resource.findById(resourceid, {}, (err, resource) => {
        if (err) {
            logger.error('Error occured in getting resource. Error', err);
            return callback(err);
        }
        assignAsync(resource.inventory_items, (err) => {
            if (err) {
                logger.error('Error occured in commiting reservation. Error', err);
                return callback(err);
            }
            resource.status = 'ASSIGNED';
            resource.additionalInfo = additionalInfo;
            resource.save((err) => {
                if (err) {
                    logger.error('Error occured saving resource. Error', err);
                    return callback(err);
                }
                return callback(null, true);
            });
        });
    });
}

function getInventory(callback) {
    Inventory.find({}, { reservations: 0 }, (err, data) => {
        return callback(err, data);
    });
}

function getResources(userId, callback) {
    Resource.find({}, { reservations: 0 }, (err, data) => {
        return callback(err, data);
    });
}

function reserveResource(name, type, inventoryItems, userId, callback) {
    const resource = new Resource({
        name,
        type,
        inventory_items: [],
        status: 'RESERVED',
        userId
    });

    reserveAsync(inventoryItems, (err, reservations) => {
        if (err) {
            return callback(err);
        }
        resource.inventory_items = reservations;
        resource.save((err, resource) => {
            if (err) {
                undoReservationAsync(reservations, (err) => {
                    if (err) {
                        return callback(new Error('Reservation failed. Unable to store resource'));
                    }
                });
            } else {
                return callback(null, resource);
            }
        });
    });
}

function reserveAsync(inventoryItems, callback) {
    const success = [];
    const failures = [];
    let counter = 0;
    for (let idx = 0; idx < inventoryItems.length; idx++) {
        const item = inventoryItems[idx];
        counter += 1;
        Inventory.makeResearvation(item.name, item.qty, item.measure, (err, reservation) => {
            counter -= 1;
            if (err) {
                logger.error('Failed to reserve resource. Error:', err);
                failures.push(item);
            } else {
                item.token = reservation.token;
                success.push(item);
            }
            if (counter === 0) {
                if (failures.length === 0) {
                    callback(null, success);
                } else {
                    undoReservationAsync(success, (err) => {
                        if (err) {
                            callback(new Error(`Unable to make reservation for requested 
                            inventory items.`, JSON.stringify(failures)));
                        }
                    });
                }
            }
        });
    }
}

function undoReservationAsync(reservations, callback) {
    let counter = 0;
    let status = true;
    for (let idx = 0; idx < reservations.length; idx++) {
        counter += 1;
        const item = reservations[idx];
        Inventory.rollBackResearvation(item.name, item.token, (err) => {
            counter -= 1;
            if (err) {
                status = false;
                logger.error('Failed to undo reservation for resource:', JSON.stringify(item));
            } else {
                logger.info('Reservation removed for the resource: ', JSON.stringify(item));
            }
            if (counter === 0) {
                callback(null, status);
            }
        });
    }
}

function assignAsync(reservations, callback) {
    const success = [];
    const failures = [];
    let counter = 0;
    for (let idx = 0; idx < reservations.length; idx++) {
        const item = reservations[idx];
        counter += 1;
        Inventory.useItem(item.name, item.token, (err) => {
            counter -= 1;
            if (err) {
                logger.error('Failed to assign reserved resource. Error:', err);
                failures.push(item);
            } else {
                success.push(item);
            }
            if (counter === 0) {
                if (failures.length === 0) {
                    callback(null, success);
                } else {
                    logger.error('Failed to assign reservation for resources:', JSON.stringify(failures));
                    callback(new Error(`Unable to assign some of reserved resrouces.
                    Resource Count Failed:`, failures.length));
                }
            }
        });
    }
}

module.exports = {
    reserveResource,
    removeResearvation,
    assignResource,
    getInventory,
    getResources
};
