'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Helper functions

function required (val) {
    return val && val.length;
}

// Request Schema definition
const RequestSchema = new Schema({
    name: {
        type: String,
        validate: [required, 'Request Name is required']
    },
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ['VM']
    },
    operation: {
        type: String,
        enum: ['CREATE', 'START', 'STOP', 'DELETE', 'UPDATE']
    },
    requestedBy: {
        type: String,
        validate: [required, 'Requested by is required']
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: {
        type: Date
    },
    status: {
        type: String,
        enum: ['SAVED', 'INPROGRESS', 'SUCCEEDED', 'FAILED']
    },
    statusMessage: {
        type: String
    },
    jobId: {
        type: String
    },
    resourceId: {
        type: String
    },
    parameters: [
        {
            name: { type: String, required: true },
            value: { type: String, required: true },
            type: { type: String, required: true, enum: ['STRING', 'NUMBER', 'OBJECT', 'CSV'] }
        }
    ]
});

const Request = mongoose.model('Request', RequestSchema);
// Expose Request Model
module.exports = Request;
