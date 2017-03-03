'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Helper functions

function required (val) {
    return val && val.length;
}

// Request Schema definition
const JobSchema = new Schema({
    name: {
        type: String,
        validate: [required, 'Request Name is required']
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    version: {
        type: String
    },
    start_step: {
        type: String
    },
    end_step: {
        type: String
    },
    kill_step: {
        type: String
    },
    task_queue: [String],
    parameters: [
        {
            name: { type: String },
            value: { type: String },
            type: { type: String, enum: ['STRING', 'NUMBER', 'OBJECT', 'CSV'], default: 'STRING' },
            default: { type: String },
            required: { type: Boolean }
        }
    ],
    global_parameters: [
        {
            name: { type: String },
            value: { type: String },
            type: { type: String, enum: ['STRING', 'NUMBER', 'OBJECT', 'CSV'], default: 'STRING' },
            default: { type: String }
        }
    ],
    parameter_mappings: [
        {
            from: {
                step: String,
                parameter: String
            },
            to: {
                step: String,
                parameter: String
            }
        }
    ],
    steps: [
        {
            stepId: String,
            name: String,
            type: { type: String, enum: ['ACTION', 'FLOW'], default: 'ACTION' },
            module: String,
            icon: String,
            input_params: [
                {
                    name: String,
                    value: String,
                    type: { type: String, enum: ['STRING', 'NUMBER', 'OBJECT', 'CSV'], default: 'STRING' }
                }
            ],
            output_params: [
                {
                    name: String,
                    value: String,
                    type: { type: String, enum: ['STRING', 'NUMBER', 'OBJECT', 'CSV'], default: 'PREPARED' }
                }
            ],
            runtime_state: Schema.Types.Mixed,
            ok: String,
            error: String,
            state: {
                type: String,
                enum: ['PREPARED', 'RUNNING', 'SUCCEEDED', 'WAITING', 'KILLED', 'FAILED'],
                default: 'PREPARED'
            }
        }
    ],
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: {
        type: Date
    },
    status: {
        type: String,
        enum: ['SAVED', 'INPROGRESS', 'SUCCEEDED', 'FAILED'],
        default: 'SAVED'
    },
    statusMessage: {
        type: String
    },
    requestId: {
        type: String
    }
});

const Job = mongoose.model('Job', JobSchema);
// Expose Request Model
module.exports = Job;
