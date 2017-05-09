'use strict';

const request = require('request');
const logger = require.main.require('./logger');
const config = require('./config');

const baseUrl = `https://${config.serverIp}:${config.port}/api2/json`;
function runTask(task, callback) {
    const createVMObj = {};
    const inputParam = task.input_params;
    inputParam.forEach((element) => {
        createVMObj.ostype = 'other';
        switch (element.name) {
            case 'vmName':
                createVMObj.vmName = element.value;
                break;
            case 'vmOS': {
                if (element.value.toLowerCase().indexOf('ununtu' > -1)) {
                    createVMObj.vmTemplateID = 118;
                }
                break;
            }
            case 'vmStorage':
                createVMObj.vmStorage = element.value;
                break;
            default:
                break;
        }
    }, this);

    getTicket()
        .then((data) => {
            createVMObj.CSRFPreventionToken = data.CSRFPreventionToken;
            createVMObj.ticket = data.ticket;
            return getNode(createVMObj);
        })
        .then((data) => {
            createVMObj.nodeName = data[0].node;
            return getVMDiskSize(createVMObj);
        })
        .then((data) => {
            let templateDiskSize = data.ide0;
            templateDiskSize = templateDiskSize.slice(templateDiskSize.indexOf('=') + 1, templateDiskSize.length - 1);
            templateDiskSize = parseInt(templateDiskSize, 10);
            if (templateDiskSize > createVMObj.vmStorage) {
                callback(new Error('Disk size is less'));
            } else {
                return getNextVMID(createVMObj);
            }
        })
        .then((data) => {
            createVMObj.vmid = data;
            return createVM(createVMObj);
        })
        .then((data) => {
            if (!data) {
                const _error = data.errors;
                callback(new Error(`VMCreation Failed: ${_error.name}`));
            } else {
                setTimeout(() => {
                    const outputParams = [{ name: 'vmID', value: createVMObj.vmid, type: 'STRING' },
                    { name: 'vmNode', value: createVMObj.nodeName, type: 'STRING' }
                    ];
                    callback(null, 'SUCCEEDED', { myState: 'createVM SUCCEEDED' }, outputParams);
                }, 10000);
            }
        })
        .catch((err) => {
            callback(new Error(`VMCreation Failed: ${err}`));
        });
}

function makePostRequest(options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error) {
                if (response.statusCode === 200) {
                    const _response = JSON.parse(body);
                    resolve(_response.data);
                } else if (response.statusCode === 400) {
                    const _response = JSON.parse(body);
                    resolve(_response);
                    // callback(new Error(`VMCreation Failed: ${err}`));
                }
            } else if (error.code === 'EHOSTUNREACH' || error) {
                reject('Unable to reach at Proxmox server.');
            } else {
                reject(response.statusMessage);
            }
        });
    });
}

function makeGetRequest(options) {
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

function getTicket() {
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

function getNode(tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes`,
        method: 'GET',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
        }
    };
    const node = makeGetRequest(options);
    node.then(() => {
        logger.info('Proxmox getNode call succesfull:');
    }).catch((err) => {
        logger.error('Proxmox gaetNode failed: ', err);
    });
    return node;
}

function getVMDiskSize (tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${tonkenDetials.nodeName}/qemu/${tonkenDetials.vmTemplateID}/config`,
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
        logger.info(`VM ${tonkenDetials.vmID} Disk Size edit succesfully`);
    }).catch((err) => {
        logger.error('VM Disk Size edit failed: ', err);
    });
    return ticket;
}

function getNextVMID(tonkenDetials) {
    const options = {
        url: `${baseUrl}/cluster/nextid`,
        method: 'GET',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
        }
    };
    const vmid = makeGetRequest(options);
    vmid.then(() => {
        logger.info('Proxmox vmid call succesfull:');
    }).catch((err) => {
        logger.error('Proxmox vmid failed: ', err);
    });
    return vmid;
}

function createVM(tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${tonkenDetials.nodeName}/qemu/${tonkenDetials.vmTemplateID}/clone`,
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
        },
        qs: {
            newid: tonkenDetials.vmid,
            name: tonkenDetials.vmName
        }
    };
    const ticket = makePostRequest(options);
    ticket.then(() => {
        // save Token and ticket
        logger.info('Proxmox Clone VM succesfully:');
    }).catch((err) => {
        logger.error('Proxmox Clone VM failed: ', err);
    });
    return ticket;
}

module.exports = {
    run: runTask
};
