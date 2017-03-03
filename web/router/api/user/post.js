'use strict';

const joi = require('joi');
const User = require('../../../../models/user');

const reqSchema = joi.object({
    userId: joi.string()
        .required(),
    password: joi.string()
        .required(),
    firstName: joi.string()
        .required(),
    lastName: joi.string()
})
    .unknown()
    .required();

function createUser (req, resp) {
    const { error, value: reqBody } = joi.validate(req.body, reqSchema);
    if (error) {
        resp.sendStatus(503);
    }

    User.newUser(reqBody.userId, reqBody.password, reqBody.firstName, reqBody.lastName, (err, objUser) => {
        if (err) {
            return resp.status(400).send({ status: false, message: 'Unable to create user' }).end();
        }
        return resp.status(200).send({ status: true, message: 'User Created', user: objUser }).end();
    });
}
module.exports = createUser;
