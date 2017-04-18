'use strict';

const request = require('request'); 
const logger = require.main.require('./logger');
const config = require('./config');

const vmObj = {};
const baseUrl = `https://${config.serverIp}:${config.port}/api2/json`;
function runTask (task, callback) {
    const inputParam = task.input_params;
    inputParam.forEach((element) => {
        switch (element.name) {
            case 'vmID':
                vmObj.vmID = element.value;
                break;
            case 'vmNode':
                vmObj.vmNode = element.value;
                break;
            case 'vmCore':
                vmObj.vmCore = element.value;
                break;
            case 'vmMemory':
                vmObj.vmMemory = element.value;
                break;
            case 'vmStorage':
                vmObj.vmStorage = element.value;
                break;
            default:
                // Nothing Todo
                break;
        }
    }, this);

    getTicket()
        .then((data) => {
            vmObj.CSRFPreventionToken = data.CSRFPreventionToken;
            vmObj.ticket = data.ticket;
            return editVMCoreAndMemory(vmObj);
        })
        .then(() => {
            return getVMDiskSize(vmObj);
        })
        .then((data) => {
            let templateDiskSize = data.ide0;
            templateDiskSize = templateDiskSize.slice(templateDiskSize.indexOf('=') + 1, templateDiskSize.length - 1);
            templateDiskSize = parseInt(templateDiskSize, 10);
            if (templateDiskSize >= vmObj.vmStorage) {
                if (templateDiskSize > vmObj.vmStorage) {
                    callback(new Error('Disk size is less'));
                } else {
                    vmObj.vmStorage = 0;
                }
            } else {
                vmObj.vmStorage -= templateDiskSize;
            }
            return editVMDisk(vmObj);
        })
        .then(() => {
            const outputParams = [{ name: 'vmID', value: vmObj.vmID, type: 'NUMBER' },
                                    { name: 'vmNode', value: vmObj.vmNode, type: 'STRING' }
            ];
            callback(null, 'SUCCEEDED', { myState: 'createVM SUCCEEDED' }, outputParams);
        })
        .catch((err) => {
            callback(new Error(`VMCreation Failed: ${err}`));
        });
}

function makePostRequest (options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            try {
                if (!error && response.statusCode === 200) {
                    const _response = JSON.parse(body);
                    resolve(_response.data);
                } else if (error.code === 'EHOSTUNREACH' || error) {
                    reject('Unable to reach at Proxmox server.');
                } else {
                    reject(response.statusMessage);
                }
            } catch (error) {
                reject('Unable to reach at Proxmox server.');
            }
        });
    });
}

function makeGetRequest (options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const _response = JSON.parse(body);
                resolve(_response.data);
            } else {
                if (error.code === 'EHOSTUNREACH' || error) {
                    reject('Unable to reach at Proxmox server.');
                } else {
                    reject(response.statusMessage);
                }
            }
        });
    });
}

function getTicket () {
    const options = {
        url: `${baseUrl}/access/ticket`,
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        qs: { username: config.userId, password: config.password, realm: config.realm }
    };

    const ticket = makePostRequest(options);
    ticket.then((result) => {
        // save Token and ticket
        logger.info(`Proxmox login succesfully: ${result}`);
    }).catch((err) => {
        logger.error('Proxmox login failed: ', err);
    });
    return ticket;
}

function editVMCoreAndMemory (tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${vmObj.vmNode}/qemu/${vmObj.vmID}/config`,
        method: 'PUT',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
        },
        qs: { cores: vmObj.vmCore, memory: vmObj.vmMemory }
    };
    const ticket = makePostRequest(options);
    ticket.then(() => {
        // save Token and ticket
        logger.info(`VM ${vmObj.vmID} Core and Memory edit succesfully`);
    }).catch((err) => {
        logger.error('VM Core and Memory edit failed: ', err);
    });
    return ticket;
}

function editVMDisk (tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${vmObj.vmNode}/qemu/${vmObj.vmID}/resize`,
        method: 'PUT',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
        },
        qs: { disk: 'ide0', size: `+${vmObj.vmStorage}G` }
    };
    const ticket = makePostRequest(options);
    ticket.then(() => {
        // save Token and ticket
        logger.info(`VM ${vmObj.vmID} Disk Size edit succesfully`);
    }).catch((err) => {
        logger.error('VM Disk Size edit failed: ', err);
    });
    return ticket;
}


function getVMDiskSize (tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${vmObj.vmNode}/qemu/${vmObj.vmID}/config`,
        method: 'GET',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
        }
    };
    const ticket = makeGetRequest(options);
    ticket.then(() => {
        // save Token and ticket
        logger.info(`VM ${vmObj.vmID} Disk Size edit succesfully`);
    }).catch((err) => {
        logger.error('VM Disk Size edit failed: ', err);
    });
    return ticket;
}

module.exports = {
    run: runTask
};
