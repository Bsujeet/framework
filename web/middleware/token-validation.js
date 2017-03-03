'use strict';

const User = require('../../models/user');

function tokenValidationFactory (options) {
    return function tokenValidation (req, res, next) {
        const opt = options;
        const path = `${req.method}:${req.url}`;
        if (opt.unprotectedURLs.indexOf(path) >= 0) {
            next();
        } else {
            const token = req.headers['x-access-token'];
            if (token) {
                User.verifyToken(token, (err, user) => {
                    if (err) {
                        return res.status(403)
                            .send({ success: false, message: 'Invalid token! Please login again.' })
                            .end();
                    }
                    req.userId = user.userId;
                    return next();
                });
            } else {
                return res.status(403)
                    .send({ success: false, message: 'No token provided.' })
                    .end();
            }
        }
    };
}

module.exports = tokenValidationFactory;
