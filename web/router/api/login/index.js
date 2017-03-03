'use strict';

const post = require('./post');
const deleteApi = require('./delete');

module.exports = {
    post,
    delete: deleteApi
};
