'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Helper functions

function required (val) {
    return val && val.length;
}

// Resource Schema definition
const ResourceSchema = new Schema({
    name: {
        type: String,
        validate: [required, 'Name of the Resource is required']
    },
    type: {
        type: String,
        enum: ['VM', 'OTHERS']
    },
    inventory_items: [
        {
            token: Schema.Types.ObjectId,
            name: String,
            qty: Number,
            measure: {
                type: String,
                enum: ['CORE', 'UNIT', 'GB', 'MB']
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    status: {
        type: String,
        enum: ['ASSIGNED', 'RESERVED'],
        default: 'RESERVED'
    },
    userId: {
        type: String,
        validate: [required, 'UserId is required']
    },
    additionalInfo: Schema.Types.Mixed,
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: {
        type: Date
    }
});

const Resource = mongoose.model('Resource', ResourceSchema);
// Expose Resource Model
module.exports = Resource;
