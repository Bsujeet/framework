'use strict';

const request = require('request');
//const logger = require.main.require('./logger');
const config = require('./config');

const baseUrl = `https://${config.serverIp}:${config.port}/api2/json`;
function runTask(callback) {
    const proObj = {};
   

    getTicket()
        .then((data) => {
            proObj.CSRFPreventionToken = data.CSRFPreventionToken;
            proObj.ticket = data.ticket;
            return getNode(proObj);
        })
        .then((data) => {
            proObj.nodeName = data[0].node;
            return nodeStatus(proObj);
        })
        .then((data) => {
            const outputParams = data;
            callback(null, 'SUCCEEDED', { myState: 'Get Node status SUCCEEDED' }, outputParams);
        })
        .catch((err) => {
            callback(new Error(`Get Node status Failed: ${err}`));
        });
}

function makePostRequest(options) {
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
        console.log(`Proxmox login succesfully: ${result}`);
        // logger.info(`Proxmox login succesfully: ${result}`);
    }).catch((err) => {
        console.log('Proxmox login failed: ', err);
        // logger.error('Proxmox login failed: ', err);
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
        console.log('Proxmox getNode call succesfull');
        //logger.info('Proxmox getNode call succesfull:');
    }).catch((err) => {
        console.log('Proxmox gaetNode failed:');
        //logger.error('Proxmox gaetNode failed: ', err);
    });
    return node;
}

function nodeStatus (tonkenDetials) {
    const options = {
        url: `${baseUrl}/nodes/${tonkenDetials.nodeName}/status`,
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
        console.log('Proxmox getNodeStatus call succesfull');
        // save Token and ticket
        //logger.info(`VM ${tonkenDetials.vmID} Disk Size edit succesfully`);
    }).catch((err) => {
        console.log('Proxmox getNodeStatus call failed');
        //logger.error('VM Disk Size edit failed: ', err);
    });
    return ticket;
}

module.exports = {
    run: runTask
};
