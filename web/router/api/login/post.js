'use strict';

const joi = require('joi');
const User = require('../../../../models/user');

const logger = require.main.require('./logger');

const reqSchema = joi.object({
        userId: joi.string()
            .required(),
        password: joi.string()
            .required()
    })
    .unknown()
    .required();

function authenticate(req, resp) {
    const {
        error,
        value: reqBody
    } = joi.validate(req.body, reqSchema);
    if (error) {
        resp.status(200).send({
            status: false,
            msg: 'Parameter error'
        });
        resp.end();
        return;
    }

    User.LdapAuthenticate(reqBody.userId, reqBody.password, (err, token) => {
        if (err) {
            resp.status(200).send({
                status: false,
                msg: err.message
            });
            resp.end();
            return;
        }
        resp.status(200).send({
            status: true,
            data: token
        });
        resp.end();
    });
}

function refreshVerifyToken(req, resp) {
    const token = req.headers['x-access-token'];
    const ifRefresh = req.headers['refresh'];
    User.verifyToken(token, (err, user) => {
        if (err) {
            resp.status(200).send({
                status: false
            });
        } else {
            if (ifRefresh) {
                User.refreshToken(user.userId, (err, token) => {
                    if (err) {
                        resp.status(200).send({
                            status: false,
                            data: 'unable to refresh token'
                        });
                    } else {
                        resp.status(200).send({
                            status: true,
                            data: token
                        });
                    }
                });
            } else {
                resp.status(200).send({
                    status: true
                });
            }
            // logger.info(`token verify for user ${user}`);
        }
    });
}

module.exports = {
    authenticate,
    refreshVerifyToken
};