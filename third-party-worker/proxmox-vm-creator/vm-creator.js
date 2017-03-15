'use strict';

const request = require('request');
const config = require('./config');

const logger = require.main.require('./logger');


const createVMObj = {};
const baseUrl = `https://${config.serverIp}:${config.port}/api2/json`;
function runTask(task, callback) {
    const inputParam = task.input_params;
    inputParam.forEach((element) => {
        createVMObj.ostype = 'other';
        switch (element.name) {
            case 'vmName':
                createVMObj.vmName = element.value;
                break;
            case 'vmCore':
                createVMObj.cores = element.value;
                break;
            case 'vmMemory':
                createVMObj.memory = element.value;
                break;
            case 'vmStorage':
                createVMObj.ide0 = `local:${element.value},format=qcow2`;
                break;
            case 'vmOS':
                createVMObj.ide2 = `local:iso/${element.value},media=cdrom`;
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
            return getNextVMID(createVMObj);
        })
        .then((data) => {
            createVMObj.vmid = data;
            return createVM(createVMObj);
        })
        .then(() => {
            const outputParams = [{ name: 'vmId', value: createVMObj.vmid, type: 'STRING' },
            { name: 'vmNode', value: createVMObj.nodeName, type: 'STRING' }
            ];
            callback(null, 'SUCCEEDED', { myState: 'createVM SUCCEEDED' }, outputParams);
        })
        .catch((err) => {
            callback(new Error(`VMCreation Failed: ${err}`));
        });
}

function makePostRequest(options) {
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

function makeGetRequest(options) {
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
            'Cookie': `PVEAuthCookie=${tonkenDetials.ticket}`,
            'CSRFPreventionToken': tonkenDetials.CSRFPreventionToken
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

function getNextVMID(tonkenDetials) {
    const options = {
        url: `${baseUrl}/cluster/nextid`,
        method: 'GET',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': `PVEAuthCookie=${tonkenDetials.ticket}`,
            'CSRFPreventionToken': tonkenDetials.CSRFPreventionToken
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
        url: `${baseUrl}/nodes/${createVMObj.nodeName}/qemu`,
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': `PVEAuthCookie=${tonkenDetials.ticket}`,
            'CSRFPreventionToken': tonkenDetials.CSRFPreventionToken
        },
        qs: {
            vmid: tonkenDetials.vmid,
            ostype: tonkenDetials.ostype,
            ide2: tonkenDetials.ide2,
            ide0: tonkenDetials.ide0,
            cores: tonkenDetials.cores,
            memory: tonkenDetials.memory,
            name: tonkenDetials.vmName
        }
    };
    const ticket = makePostRequest(options);
    ticket.then(() => {
        // save Token and ticket
        logger.info('Proxmox createVM succesfully:');
    }).catch((err) => {
        logger.error('Proxmox createVM failed: ', err);
    });
    return ticket;
}

module.exports = {
    run: runTask
};
