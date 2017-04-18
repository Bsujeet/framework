'use strict';

const request = require('request');
const logger = require.main.require('./logger');
const config = require('./config');

const baseUrl = `https://${config.serverIp}:${config.port}/api2/json`;
function runTask (task, callback) {
    const inputParam = task.input_params;
    const deleteVMObj = {};
    inputParam.forEach((element) => {
        switch (element.name) {
            case 'vmID':
                deleteVMObj.vmID = element.value;
                break;
            case 'vmNode':
                deleteVMObj.vmNode = element.value;
                break;
            default:
                // Nothing Todo
                break;
        }
    }, this);

    getTicket()
        .then((data) => {
            deleteVMObj.CSRFPreventionToken = data.CSRFPreventionToken;
            deleteVMObj.ticket = data.ticket;
            return deleteVM(deleteVMObj);
        })
        .then(() => {
            const outputParams = [];
            callback(null, 'SUCCEEDED', { myState: 'Delete VM SUCCEEDED' }, outputParams);
        })
        .catch((err) => {
            callback(new Error(`Delete VM Failed: ${err}`));
        });
}

function makePostRequest (options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const _response = JSON.parse(body);
                resolve(_response.data);
            } else if (error.code === 'EHOSTUNREACH' || error) {
                reject('Unable to reach at Proxmox server.');
            } else {
                reject(response.statusMessage);
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

function deleteVM (tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${tonkenDetials.vmNode}/qemu/${tonkenDetials.vmID}`,
        method: 'DELETE',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
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
        logger.info('Proxmox Delete VM Succesfully:');
    }).catch((err) => {
        logger.error('Proxmox Delete VM Failed: ', err);
    });
    return ticket;
}

module.exports = {
    run: runTask
};
