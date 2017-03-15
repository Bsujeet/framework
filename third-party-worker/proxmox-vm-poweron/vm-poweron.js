'use strict';

const request = require('request');
const config = require('./config');

const logger = require.main.require('./logger');


const vmObj = {};
const baseUrl = `https://${config.serverIp}:${config.port}/api2/json`;
function runTask(task, callback) {
    const inputParam = task.input_params;
    inputParam.forEach((element) => {
        switch (element.name) {
            case 'vmId':
                vmObj.vmid = element.value;
                break;
            case 'vmNode':
                vmObj.nodeName = element.value;
                break;
            default:
                break;
        }
    }, this);

    getTicket()
        .then((data) => {
            vmObj.CSRFPreventionToken = data.CSRFPreventionToken;
            vmObj.ticket = data.ticket;
            return powerOnVM(vmObj);
        })
        .then(() => {
            const outputParams = [];
            callback(null, 'SUCCEEDED', { myState: 'Powered on SUCCEEDED' }, outputParams);
        })
        .catch((err) => {
            callback(new Error(`VM Power ON Failed: ${err}`));
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
        logger.info(`Proxmox login to power on vm succesfully: ${result}`);
    }).catch((err) => {
        logger.error('Proxmox login to power on vm failed: ', err);
    });
    return ticket;
}

function powerOnVM(tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${vmObj.nodeName}/qemu/${vmObj.vmid}/status/start`,
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': `PVEAuthCookie=${tonkenDetials.ticket}`,
            'CSRFPreventionToken': tonkenDetials.CSRFPreventionToken
        }
    };
    const ticket = makePostRequest(options);
    ticket.then(() => {
        // save Token and ticket
        logger.info('Proxmox Power on vm succesfully:');
    }).catch((err) => {
        logger.error('Proxmox Power on vm failed: ', err);
    });
    return ticket;
}

module.exports = {
    run: runTask
};
