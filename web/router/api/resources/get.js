'use strict';

const joi = require('joi');
const RequestManager = require('../../../../resource-manager');

const paramSchema = joi.object({
    requestId: joi.string()
})
    .unknown()
    .required();

function findRequest (req, resp) {
    const { error, value: reqParams } = joi.validate(req.params, paramSchema);
    if (error) {
        resp.status(400).send({ status: false, message: 'Invalid/Missing Parameters' }).end();
    }
    if (req.url === '/api/v1/requests/inventory') {
        RequestManager.getInventory(reqParams.requestId, (err, requests) => {
            if (err) {
                return resp.status(400).send({ status: false, message: 'Unable to find request' }).end();
            }
            return resp.status(200).send({ status: true, data: requests }).end();
        });
    } else if (req.url === '/api/v1/requests/resources') {
        RequestManager.getResources(reqParams.requestId, (err, requests) => {
            if (err) {
                return resp.status(400).send({ status: false, message: 'Unable to find request' }).end();
            }
            return resp.status(200).send({ status: true, data: requests }).end();
        });
    }
}

module.exports = findRequest;
