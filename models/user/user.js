'use strict';

const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const config = require('../../config');

const Schema = mongoose.Schema;

// Helper functions
function hash(msg, key) {
    return crypto.createHmac('sha256', key).update(msg).digest('hex');
}

function required(val) {
    return val && val.length;
}

// User Schema definition
const UserSchema = new Schema({
    userId: {
        type: String,
        validate: [required, 'UserID is required'],
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        validate: [required, 'Password is required']
    },
    firstName: {
        type: String,
        validate: [required, 'First name is required']
    },
    lastName: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    sessions: [{
        token: String,
        expiry: String,
        createdAt: {
            type: Date,
            default: Date.now
        },
        lastAccessedAt: {
            type: Date,
            default: Date.now
        }
    }]
});


// Define Additional Methods for User Object
UserSchema.statics.authenticate = function (userId, password, callback) {
    const _self = this;
    this.findOne({
        userId
    }, (err, user) => {
        if (user && user.password === hash(password, config.Common.secret)) {
            // return callback(null,{token:'some Token'});
            const expiry = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7); // Expires in 1 week
            const token = jwt.sign({
                exp: expiry,
                data: {
                    userId: user.userId,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            }, config.Common.secret);
            const session = {
                token,
                expiry
            };
            _self.update({
                _id: user._id
            }, {
                $push: {
                    sessions: session
                }
            }, {
                multi: false,
                safe: true
            }, (err) => {
                if (err) {
                    return callback(new Error('Unable to create new session'));
                }
                return callback(null, session);
            });
        } else {
            // Otherwise password is invalid
            return callback(new Error('invalid userid or password'));
        }
    });
};


UserSchema.statics.verifyToken = function (token, callback) {
    jwt.verify(token, config.Common.secret, (err, decoded) => {
        if (err) {
            return callback(new Error('Malformed Token!'));
        }
        const userId = decoded.data.userId;

        this.findOne({
            userId
        }, {
            sessions: {
                $elemMatch: {
                    token
                }
            }
        }, (err, user) => {
            if (err || user.sessions.length === 0) {
                return callback(new Error('Failed to validate token'));
            }
            return callback(null, decoded.data);
        });
    });
};

UserSchema.statics.refreshToken = function (userId, callback) {
    const _self = this;
    this.findOne({
        userId
    }, (err, user) => {
        if (user) {
            // return callback(null,{token:'some Token'});
            const expiry = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7); // Expires in 1 week
            const token = jwt.sign({
                exp: expiry,
                data: {
                    userId: user.userId,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            }, config.Common.secret);
            const session = {
                token,
                expiry
            };
            _self.update({
                _id: user._id
            }, {
                $push: {
                    sessions: session
                }
            }, {
                multi: false,
                safe: true
            }, (err) => {
                if (err) {
                    return callback(new Error('Unable to create new session'));
                }
                return callback(null, session);
            });
        } else {
            // Otherwise password is invalid
            return callback(new Error('invalid token'));
        }
    });
};

UserSchema.statics.deleteSession = function (userId, token, callback) {
    this.update({
            userId
        }, {
            $pull: {
                sessions: {
                    token
                }
            }
        }, {
            safe: true
        },
        (err, user) => {
            if (err) {
                return callback(new Error('Failed to remove session'));
            }
            return callback(null, user);
        });
};

UserSchema.statics.newUser = function (userId, password, firstName, lastName, callback) {
    const instance = new User({
        userId,
        password: hash(password, config.Common.secret),
        firstName,
        lastName
    });

    instance.save((err) => {
        callback(err, instance);
    });
};

UserSchema.statics.resetPassword = function (userId, callback) {
    let newPassword = '';
    newPassword = newPassword.randomString(6);
    const cripto = hash(newPassword, config.secret);
    const data = {};
    data.password = cripto;

    this.update({
        userId
    }, {
        $set: data
    }, {
        multi: false,
        safe: true
    }, (error) => {
        if (error) {
            callback(error);
        } else {
            callback(null, newPassword);
        }
    });
};

const User = mongoose.model('User', UserSchema);

UserSchema.path('userId').validate((v, fn) => {
    User.count({
        userId: v
    }, (err, val) => {
        if (err) {
            fn(false);
        }
        fn(val === 0);
    });
}, 'Duplicate userid!');

// Expose User Model
module.exports = User;