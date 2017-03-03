'use strict';

const joi = require('joi');
const User = require('../../../../models/user');

const paramSchema = joi.object({
    userId: joi.string()
})
    .unknown()
    .required();

function findUser (req, resp) {
    const { error, value: reqParams } = joi.validate(req.params, paramSchema);
    if (error) {
        resp.sendStatus(503);
    }

    const userQuery = {};

    if (reqParams.userId) {
        userQuery.userId = reqParams.userId;
    }
    User.find(userQuery, { password: 0 }, (err, users) => {
        if (err) {
            return resp.status(400).send({ status: false, message: 'Unable to find user' }).end();
        }
        return resp.status(200).send({ status: true, data: users }).end();
    });
}

module.exports = findUser;
