'use strict';

const User = require('../../../../models/user');

function logout (req, resp) {
    const token = req.headers['x-access-token'];
    if (!token) {
        // This Code should never hit
        resp.status(400).send({ status: false, msg: 'Toking missing in header!' });
        resp.end();
        return;
    }

    User.deleteSession(req.userId, token, (err, token) => {
        if (err) {
            resp.status(400).send({ status: false, msg: 'Invalid UserID/Password' });
            resp.end();
            return;
        }
        resp.status(200).send({ status: true, data: token });
        resp.end();
    });
}

module.exports = logout;
