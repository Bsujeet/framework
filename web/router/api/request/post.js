'use strict';

const joi = require('joi');
const RequestManager = require('../../../../request-manager');

const reqSchema = joi.object({
        name: joi.string()
            .required(),
        type: joi.string()
            .required(),
        operation: joi.string()
            .required(),
        parameters: joi.array()
            .required()
    })
    .unknown()
    .required();

function createRequest(req, resp) {
    const {
        error,
        value: reqBody
    } = joi.validate(req.body, reqSchema, {
        allowUnknown: true
    });
    if (error) {
        return resp.status(200).send({
            status: false,
            error
        });
    }
    reqBody.userId = req.userId;
    return RequestManager.createRequest(reqBody, (err, dataResult) => {
        if (err) {
            return resp.status(400).send({
                status: false,
                message: err
            }).end();
        }
        return resp.status(200).send({
            status: true,
            data: dataResult
        }).end();
    });
}

module.exports = createRequest;