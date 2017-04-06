'use strict';

const logger = require.main.require('./logger');
const Request = require('../models/request');
const Job = require('../models/job');
const ResourceManager = require('../resource-manager');
const workflow = require('../models/workflow/static-vm-workflow'); // TODO get it from DB
const editVMWorkflow = require('../models/workflow/static-vm-edit-workflow'); // TODO get it from DB
const EventBus = require('../event-bus');
const Resource = require('../models/resource');

require('../scoketOperations');

function createRequest(reqBody, callback) {

    const request = new Request({
        name: reqBody.name,
        type: reqBody.type,
        operation: reqBody.operation,
        description: reqBody.description,
        requestedBy: reqBody.userId,
        status: 'SAVED',
        parameters: reqBody.parameters
    });

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
                let vmId = '';
                let resourceId = '';
                // Populate editVMWorkflow parameters

                // resourceId
                const paramResourceId = reqBody.parameters.filter((param) => {
                    return param.name === 'resourceId';
                });
                if (paramResourceId.length === 1) { // TODO: Add more validations as required
                    resourceId = paramResourceId[0].value;
                    editVMWorkflow.parameters.filter((param) => {
                        return param.name === 'resourceId';
                    })[0].value = paramResourceId[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: resourceId'), null);
                }


                // vmName
                const paramVmName = reqBody.parameters.filter((param) => {
                    return param.name === 'vmName';
                });
                if (paramVmName.length === 1) { // TODO: Add more validations as required
                    vmname = paramVmName[0].value;
                    editVMWorkflow.parameters.filter((param) => {
                        return param.name === 'vmName';
                    })[0].value = paramVmName[0].value;
                } else {
                    return callback(new Error('Missing reqired Parameter: vmName'), null);
                }

                // vm_Id
                const paramVmId = reqBody.parameters.filter((param) => {
                    return param.name === 'vm_Id';
                });
                if (paramVmId.length === 1) { // TODO: Add more validations as required
                    vmId = paramVmId[0].value;
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

                // vmNode
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

                // Get Resources for given resourceId and calculate diff for resource reservation
                Resource.findById(resourceId, {}, (err, resourceInventory) => {
                    if (err) {
                        return callback(err);
                    }
                    if (resourceInventory == null) {
                        return callback(err);
                    } else {
                        for (let index = 0; index < resourceInventory.inventory_items.length; index++) {
                            const resourceInventryItemName = resourceInventory.inventory_items[index].name;
                            for (let i = 0; i < resourceItems.length; i++) {
                                if (resourceInventryItemName === resourceItems[i].name && resourceInventryItemName !== 'storage') {
                                    let diff;
                                    if (resourceInventory.inventory_items[index].qty > resourceItems[i].qty){
                                        diff = resourceItems[i].qty - resourceInventory.inventory_items[index].qty;
                                    } else {
                                        diff = resourceItems[i].qty - resourceInventory.inventory_items[index].qty;
                                    }
                                    resourceItems[i].qty = diff;
                                    break;
                                } else if (resourceInventryItemName === resourceItems[i].name && resourceInventryItemName === 'storage') {
                                    if (resourceItems[i].qty < resourceInventory.inventory_items[index].qty) {
                                        return callback(new Error('Proxmox not allow to decrease disk size.'), null);
                                    } else if (resourceItems[i].qty === resourceInventory.inventory_items[index].qty) {
                                        resourceItems[i].qty = 0;
                                    } else {
                                        const staorageDiff = resourceItems[i].qty - resourceInventory.inventory_items[index].qty;
                                        resourceItems[i].qty = staorageDiff;
                                    }
                                    break;
                                }
                            }
                        }
                        // Update Requset data incase of storage is increase
                        try {
                            for (let i = 0; i < resourceItems.length; i++) {
                                if (resourceItems[i].name === 'storage') {
                                    for (let index = 0; index < editVMWorkflow.parameters.length; index++) {
                                        if (editVMWorkflow.parameters[index].name === 'storage') {
                                            editVMWorkflow.parameters[index].value = resourceItems[i].qty;
                                        }
                                    }
                                }
                            }
                        } catch (error) {
                            logger.error('Error Occured during update Requset data incase of storage is increase. Error:', error);
                        }

                        ResourceManager.modifyReserveResource(vmname, vmId, resourceId, 'VM', resourceItems, 'admin', (err, resource) => {
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
                    }
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
            // additionalInfo (vmId and vmNode) added for Create VM Workflow
            let additionalInfo = {};
            const outputParam = job.steps[1].output_params;
            additionalInfo = { vmId: outputParam[0].value, vmNode: outputParam[1].value };
            if (job.name === 'EDIT_VM') {
                for (const key in request.parameters) {
                    // Get resouce ID which is given by User
                    if (request.parameters[key].name === 'resourceId') {
                        const requestID = request.parameters[key].value;
                        let objectToCompare = {};
                        Resource.findById(request.resourceId, {}, (err, tempResourceInventory) => {
                            // To remove Temprary resource-data from resource DB
                            if (err) {
                                return logger.error('Error occured while fetching resource from Resource DB. Error:', err);
                            } else {
                                objectToCompare = tempResourceInventory;
                                // Find Original resource data from Resource DB
                                Resource.findById(requestID, {}, (err, orignalResourceInventory) => {
                                    if (err) {
                                        return logger.error('Error occured while fetching orignal resource from Resource DB. Error:', err);
                                    } else {
                                        // Update Core, Storage, Memory and Resource ID in Resource DB
                                        for (let index = 0; index < orignalResourceInventory.inventory_items.length; index++) {
                                            let dbInventryItemName = orignalResourceInventory.inventory_items[index].name;

                                            for (let i = 0; i < objectToCompare.inventory_items.length; i++) {
                                                if (dbInventryItemName === objectToCompare.inventory_items[i].name) {
                                                    // request iteration need to remove (solution: put add/remove property in resource DB)
                                                    for (let j = 0; j < request.parameters.length-1; j++) {
                                                        // Hard code property check need to remove
                                                        dbInventryItemName = dbInventryItemName === 'cpu' ? 'cores' : dbInventryItemName;
                                                        if (request.parameters[j].name === dbInventryItemName) {
                                                            orignalResourceInventory.inventory_items[index].qty =
                                                                objectToCompare.inventory_items[i].qty + orignalResourceInventory.inventory_items[index].qty;
                                                        }
                                                    }
                                                    break;
                                                }
                                            }
                                        }
                                        Resource.inventory_items = orignalResourceInventory.inventory_items;
                                        orignalResourceInventory.save((err, resource) => {
                                            if (err) {
                                                return logger.error('Error occured while updating orignal resource from Resource DB. Error:', err);
                                            } else {
                                                Resource.remove({ _id: request.resourceId }, (err, res) => {
                                                    if (err) {
                                                        return logger.error('Error occured while removing temp resource from Resource DB. Error:', err);
                                                    } else {
                                                        logger.info('Resource DB is updated successfully.');
                                                        request.save((err, resource) => {
                                                            if (err) {
                                                                return logger.error('Error occured during update resource Id in Request DB. Error:', err);
                                                            } else {
                                                                logger.info('Request DB is updated successfully.');
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                        break;
                    }
                }
            }

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