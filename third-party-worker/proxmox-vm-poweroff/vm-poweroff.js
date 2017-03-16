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
            default:
                // Nothing Todo
                break;
        }
    }, this);

    getTicket()
        .then((data) => {
            vmObj.CSRFPreventionToken = data.CSRFPreventionToken;
            vmObj.ticket = data.ticket;
            return powerOffVM(vmObj);
        })
        .then(() => {
            const outputParams = [{ name: 'vmID', value: vmObj.vmID, type: 'NUMBER' },
                                    { name: 'vmNode', value: vmObj.vmNode, type: 'STRING' }
            ];
            callback(null, 'SUCCEEDED', { myState: 'Power Off VM SUCCEEDED' }, outputParams);
        })
        .catch((err) => {
            callback(new Error(`Power Off VM Failed: ${err}`));
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

/* function makeGetRequest (options) {
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
} */

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

function powerOffVM (tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${vmObj.vmNode}/qemu/${vmObj.vmID}/status/stop`,
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
        }
    };
    const ticket = makePostRequest(options);
    ticket.then(() => {
        // save Token and ticket
        logger.info(`VM ${vmObj.vmID} Power off succesfully`);
    }).catch((err) => {
        logger.error('Proxmox Power off failed: ', err);
    });
    return ticket;
}

module.exports = {
    run: runTask
};
