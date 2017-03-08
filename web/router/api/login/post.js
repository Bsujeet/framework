'use strict';

const joi = require('joi');
const User = require('../../../../models/user');

const reqSchema = joi.object({
    userId: joi.string()
        .required(),
    password: joi.string()
        .required()
})
    .unknown()
    .required();

function authenticate (req, resp) {
    const { error, value: reqBody } = joi.validate(req.body, reqSchema);
    if (error) {
        resp.status(200).send({ status: false, msg: 'Parameter error' });
        resp.end();
        return;
    }

    User.authenticate(reqBody.userId, reqBody.password, (err, token) => {
        if (err) {
            resp.status(200).send({ status: false, msg: 'Invalid UserID/Password' });
            resp.end();
            return;
        }
        resp.status(200).send({ status: true, data: token });
        resp.end();
    });
}

module.exports = authenticate;
