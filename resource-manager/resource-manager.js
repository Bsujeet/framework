'use strict';

const logger = require.main.require('./logger');
const Inventory = require('../models/inventory');
const Resource = require('../models/resource');

// This function removeInventory will remove Used Quantity from Inventory and remove resource
function removeInventory(resourceid, callback) {
    Resource.findById(resourceid, {}, (err, resource) => {
        if (err) {
            logger.error('Error occured in getting resource. Error', err);
            return callback(err);
        }
        removeUsedResourceAsync(resource.inventory_items, (err) => {
            // if (err) { Need To Test
            if (!err) {
                logger.error('Error occured in deleting resource. Error', err);
                return callback(err);
            }
            resource.remove((err) => {
                if (err) {
                    logger.error('Error occured in deleting resource. Error', err);
                    return callback(err);
                } else {
                    Resource.remove({
                        _id: resourceid
                    }, (err, res) => {
                        if (err) {
                            return logger.error('Error occured while deleting resource from Resource DB. Error:', err);
                        } else {
                            logger.info('Resource deleted successfully.');
                        }
                    });
                }
                return callback(null, true);
            });
        });
    });
}

function removeUsedResourceAsync(reservations, callback) {
    let counter = 0;
    let status = true;
    for (let idx = 0; idx < reservations.length; idx++) {
        counter += 1;
        const item = reservations[idx];
        Inventory.removeUsedInventory(item.name, item.qty, item.token, (err) => {
            counter -= 1;
            if (err) {
                status = false;
                logger.error('Failed to delete used resource for resource DB:', JSON.stringify(item));
            } else {
                logger.info('Used Resources removed from resource db: ', JSON.stringify(item));
            }
            if (counter === 0) {
                callback(status);
            }
        });
    }
}

function removeResearvation(resourceid, callback) {
    Resource.findById(resourceid, {}, (err, resource) => {
        if (err) {
            logger.error('Error occured in getting resource. Error', err);
            return callback(err);
        }
        undoReservationAsync(resource.inventory_items, (err) => {
            // if (err) { Need To Test
            if (!err) {
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

function getInventory(userId, callback) {
    Inventory.find({}, {
        reservations: 0
    }, (err, data) => {
        if (err) {
            logger.error('Error occured while getting inventory from DB. Error:', err);
            return callback(err);
        }
        return callback(null, data);
    });
}

function getResources(resourceId, callback) {
    if (resourceId) {
        Resource.findById(resourceId, {}, (err, data) => {
            if (err) {
                logger.error(`Error occured while getting resources from DB. Error: resourceId = ${resourceId}`, err);
                return callback(err);
            }
            return callback(null, data);
        });
    } else {
        Resource.find({}, {
            reservations: 0
        }, (err, data) => {
            if (err) {
                logger.error('Error occured while getting resources from DB. Error:', err);
                return callback(err);
            }
            return callback(null, data);
        });
    }
}

function getResourcesToEdit(userId, callback) {
    Resource.find({}, {
        reservations: 0
    }, (err, data) => {
        const resData = [];
        if (err) {
            logger.error('Error occured while getting resources from DB. Error:', err);
            return callback(err);
        }
        for (let index = 0; index < data.length; index++) {
            const _data = data[index];
            if (_data.status === 'ASSIGNED') {
                const tempObj = {};
                tempObj.vmName = _data.name;
                tempObj.vmId = _data.additionalInfo.vmId;
                tempObj.vmNode = _data.additionalInfo.vmNode;
                tempObj.requestId = _data._id;
                resData.push(tempObj);
            }
        }
        return callback(null, resData);
    });
}

function modifyReserveResource(name, vmId, resourceId, type, inventoryItems, userId, callback) {
    const resource = new Resource({
        name,
        vmId,
        resourceId,
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
                callback(status);
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
    removeInventory,
    modifyReserveResource,
    removeResearvation,
    assignResource,
    getInventory,
    getResources,
    getResourcesToEdit
};
