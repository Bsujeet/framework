'use strict';

const request = require('request');
const logger = require.main.require('./logger');
const config = require('./config');
const maxIterationToGetIP = 15;
const baseUrl = `https://${config.serverIp}:${config.port}/api2/json`;
function runTask(task, callback) {
    const inputParam = task.input_params;
    const vmObj = {};
    vmObj.countOfRequest = 0;
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
            // return fetchVMIP(vmObj);
            fetchVMIP(vmObj, callback);
        })
        .then((data) => {
            // For now Nothing to do
        })
        .catch((err) => {
            // callback(new Error(`Power Off VM Failed: ${err}`));
        });
}

function makePostRequest(options) {
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

function fetchVMIP(tonkenDetials, callback) {
    let timmer;
    const options = {
        url: `${baseUrl}/nodes/${tonkenDetials.vmNode}/qemu/${tonkenDetials.vmID}/agent`,
        method: 'POST',
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'request',
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: `PVEAuthCookie=${tonkenDetials.ticket}`,
            CSRFPreventionToken: tonkenDetials.CSRFPreventionToken
        },
        qs: {
            command: 'network-get-interfaces'
        }
    };
    const ticket = makePostRequest(options);
    ticket.then((data) => {
        // save Token and ticket
        logger.info(`VM ${tonkenDetials.vmID} IP is  + ${data}`);
        clearTimeout(timmer);
        let ipObj = '';
        const _data = data.result;
        for (let index = 0; index < _data.length; index++) {
            if (_data[index].name === 'eth0') {
                for (let i = 0; i < _data[index]['ip-addresses'].length; i++) {
                    if (_data[index]['ip-addresses'][i]['ip-address-type'] === 'ipv4') {
                        ipObj = _data[index]['ip-addresses'][i]['ip-address'];
                        break;
                    }
                }
            }
        }

        const outputParams = [{ name: 'vmID', value: tonkenDetials.vmID, type: 'NUMBER' },
        { name: 'vmNode', value: tonkenDetials.vmNode, type: 'STRING' },
        { name: 'vmIP', value: ipObj, type: 'STRING' },
        { name: 'loginUserName', value: 'calsoft', type: 'STRING' },
        { name: 'loginPassword', value: 'calsoft', type: 'STRING' }
        ];
        callback(null, 'SUCCEEDED', { myState: 'Get IP of VM SUCCEEDED' }, outputParams);
    }).catch((err) => {
        tonkenDetials.countOfRequest += 1;
        logger.info(`Try to fetch cloned vm ip ${tonkenDetials.countOfRequest}`);
        if (tonkenDetials.countOfRequest < maxIterationToGetIP) {
            timmer = setTimeout(() => {
                fetchVMIP(tonkenDetials, callback);
            }, 20000);
        } else {
            callback(new Error(`Unable to fetch cloned vm ip: ${err}`));
        }
    });
}

module.exports = {
    run: runTask
};
