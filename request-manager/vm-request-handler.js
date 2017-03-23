'use strict';

const logger = require.main.require('./logger');
const Request = require('../models/request');
const Job = require('../models/job');
const ResourceManager = require('../resource-manager');
const workflow = require('../models/workflow/static-vm-workflow'); // TODO get it from DB
const editVMWorkflow = require('../models/workflow/static-vm-edit-workflow'); // TODO get it from DB
const EventBus = require('../event-bus');

require('../scoketOperations');

function createRequest(reqBody, callback) {
    switch (reqBody.operation) {
        case 'CREATE':
            {
                const resourceItems = [];
                let vmname = '';
                // Populate workflow parameters
                // vm_name
                const paramVmName = reqBody.parameters.filter((param) => {
                    return param.name === 'vmName';
                });
                if (paramVmName.length === 1) { // TODO: Add more validations as required
                    vmname = paramVmName[0].value;
                    workflow.parameters.filter((param) => {
                        return param.name === 'vm_name';
                    })[0].value = paramVmName[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: vmName'), null);
                }
                // number_of_cores
                const paramNumberOfCores = reqBody.parameters.filter((param) => {
                    return param.name === 'cores';
                });
                if (paramNumberOfCores.length === 1) {
                    resourceItems.push({
                        name: 'cpu',
                        qty: parseInt(paramNumberOfCores[0].value, 10),
                        measure: 'CORE'
                    });
                    workflow.parameters.filter((param) => {
                        return param.name === 'number_of_cores';
                    })[0].value = paramNumberOfCores[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: cores'), null);
                }
                // memory
                const paramMemory = reqBody.parameters.filter((param) => {
                    return param.name === 'memory';
                });
                if (paramMemory.length === 1) {
                    resourceItems.push({
                        name: 'memory',
                        qty: parseInt(paramMemory[0].value, 10),
                        measure: 'MB'
                    });
                    workflow.parameters.filter((param) => {
                        return param.name === 'memory';
                    })[0].value = paramMemory[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: memory'), null);
                }
                // storage
                const paramStorage = reqBody.parameters.filter((param) => {
                    return param.name === 'storage';
                });
                if (paramStorage.length === 1) {
                    resourceItems.push({
                        name: 'storage',
                        qty: parseInt(paramStorage[0].value, 10),
                        measure: 'GB'
                    });
                    workflow.parameters.filter((param) => {
                        return param.name === 'storage';
                    })[0].value = paramStorage[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: storage'), null);
                }
                // OS
                const paramOs = reqBody.parameters.filter((param) => {
                    return param.name === 'os';
                });
                if (paramOs.length === 1) {
                    workflow.parameters.filter((param) => {
                        return param.name === 'os';
                    })[0].value = paramOs[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: OS'), null);
                }
                const request = new Request({
                    name: reqBody.name,
                    type: reqBody.type,
                    operation: reqBody.operation,
                    description: reqBody.description,
                    requestedBy: reqBody.userId,
                    status: 'SAVED',
                    parameters: reqBody.parameters
                });

                ResourceManager.reserveResource(vmname, 'VM', resourceItems, 'admin', (err, resource) => {
                    if (err) {
                        logger.error('Error Occured in resource reservation. Error:', err);
                        return callback(err, null);
                    }
                    const job = new Job(workflow);
                    request.jobId = job.get('id');
                    request.resourceId = resource.get('id');
                    job.requestId = request.get('id');
                    request.save((err) => {
                        if (err) {
                            logger.error('Error occured while saving request to DB. Error:', err);
                            return callback(err, null);
                        }

                        job.save((err) => {
                            if (err) {
                                logger.error('Error occured while saving job to DB. Error:', err);
                                logger.info('Start rollback of Request Saved.');
                                // Rollback request save operation
                                // TODO: Test below code
                                ResourceManager.removeResearvation(resource.resourceId, (err) => {
                                    if (err) {
                                        return logger.error('Error occured while removing reservation. Error:', err);
                                    }
                                });
                                request.remove((err) => {
                                    if (err) {
                                        return logger.error('Error occured while deleting request from DB. Error:', err);
                                    }
                                });
                                return callback(err, null);
                            }
                            callback(null, request);
                        });
                    });
                });
                break;
            }
        case 'UPDATE':
            {
                const resourceItems = [];
                let vmname = '';
                // Populate editVMWorkflow parameters
                // vm_Id
                const paramVmId = reqBody.parameters.filter((param) => {
                    return param.name === 'vm_Id';
                });
                if (paramVmId.length === 1) { // TODO: Add more validations as required
                    vmname = paramVmId[0].value;
                    editVMWorkflow.parameters.filter((param) => {
                        return param.name === 'vm_Id';
                    })[0].value = paramVmId[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: vmID'), null);
                }

                // number_of_cores
                const paramNumberOfCores = reqBody.parameters.filter((param) => {
                    return param.name === 'cores';
                });
                if (paramNumberOfCores.length === 1) {
                    resourceItems.push({
                        name: 'cpu',
                        qty: parseInt(paramNumberOfCores[0].value, 10),
                        measure: 'CORE'
                    });
                    editVMWorkflow.parameters.filter((param) => {
                        return param.name === 'number_of_cores';
                    })[0].value = paramNumberOfCores[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: cores'), null);
                }

                // memory
                const paramMemory = reqBody.parameters.filter((param) => {
                    return param.name === 'memory';
                });
                if (paramMemory.length === 1) {
                    resourceItems.push({
                        name: 'memory',
                        qty: parseInt(paramMemory[0].value, 10),
                        measure: 'MB'
                    });
                    editVMWorkflow.parameters.filter((param) => {
                        return param.name === 'memory';
                    })[0].value = paramMemory[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: memory'), null);
                }

                // storage
                const paramStorage = reqBody.parameters.filter((param) => {
                    return param.name === 'storage';
                });
                if (paramStorage.length === 1) {
                    resourceItems.push({
                        name: 'storage',
                        qty: parseInt(paramStorage[0].value, 10),
                        measure: 'GB'
                    });
                    editVMWorkflow.parameters.filter((param) => {
                        return param.name === 'storage';
                    })[0].value = paramStorage[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: storage'), null);
                }

                //vmNode
                const paramOs = reqBody.parameters.filter((param) => {
                    return param.name === 'vm_node';
                });
                if (paramOs.length === 1) {
                    editVMWorkflow.parameters.filter((param) => {
                        return param.name === 'vm_node';
                    })[0].value = paramOs[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: vmNode'), null);
                }

                const request = new Request({
                    name: reqBody.name,
                    type: reqBody.type,
                    operation: reqBody.operation,
                    description: reqBody.description,
                    requestedBy: reqBody.userId,
                    status: 'SAVED',
                    parameters: reqBody.parameters
                });

                ResourceManager.reserveResource(vmname, 'VM', resourceItems, 'admin', (err, resource) => {
                    if (err) {
                        logger.error('Error Occured in resource reservation. Error:', err);
                        return callback(err, null);
                    }
                    const job = new Job(editVMWorkflow);
                    request.jobId = job.get('id');
                    request.resourceId = resource.get('id');
                    job.requestId = request.get('id');
                    request.save((err) => {
                        if (err) {
                            logger.error('Error occured while saving request to DB. Error:', err);
                            return callback(err, null);
                        }

                        job.save((err) => {
                            if (err) {
                                logger.error('Error occured while saving job to DB. Error:', err);
                                logger.info('Start rollback of Request Saved.');
                                // Rollback request save operation
                                // TODO: Test below code
                                ResourceManager.removeResearvation(resource.resourceId, (err) => {
                                    if (err) {
                                        return logger.error('Error occured while removing reservation. Error:', err);
                                    }
                                });
                                request.remove((err) => {
                                    if (err) {
                                        return logger.error('Error occured while deleting request from DB. Error:', err);
                                    }
                                });
                                return callback(err, null);
                            }
                            callback(null, request);
                        });
                    });
                });
                break;
            }
        default:
            logger.error('Request Operation not supported for VM Request Type. Operation:', reqBody.operation);
            return callback(new Error('Operation not supported for VM Request Type'), null);
    }
}

function onRequestComplete(request) {
    const jobId = request.jobId;
    Job.findById(jobId, {}, (err, job) => {
        if (err) {
            logger.error('Error occured while getting request from DB. Error:', err);
            return;
        }
        if (job.status === 'SUCCEEDED') {
            const additionalInfo = {
                vmId: '123'
            }; // have to change it is hardcoded
            ResourceManager.assignResource(request.resourceId, additionalInfo, (err) => {
                if (err) {
                    return logger.error('Error occured while commiting reserved resources. Error:', err);
                }
            });
            request.status = 'SUCCEEDED';
        } else if (job.status === 'FAILED') {
            ResourceManager.removeResearvation(request.resourceId, (err) => {
                if (err) {
                    return logger.error(`Error occured while releasing reserved resources.
                    Error:`, err);
                }
            });
            request.status = 'FAILED';
        }
        request.save((err) => {
            if (err) {
                return logger.error('Error occured while saving request to DB. Error:', err);
            } else {
                EventBus.Emitter.emit(EventBus.Events.BROWSER_PUSH, {
                    updatedRequestData: request
                });
            }
        });
    });
}

module.exports = {
    createRequest,
    onRequestComplete
};