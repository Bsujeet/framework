'use strict';

const post = require('./post');
const deleteApi = require('./delete');

module.exports = {
    post: post.authenticate,
    refresh: post.refreshVerifyToken,
    delete: deleteApi
};