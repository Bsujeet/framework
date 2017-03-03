'use strict';

const logger = require('winston');
const Request = require('../models/request');
const EventBus = require('../event-bus');
// Require below modules just to initialize them. These module has no direct dependency
require('../workflow-manager');
require('../task-executer');
// End
const VMRequestHandler = require('./vm-request-handler');

EventBus.Emitter.on(EventBus.Events.JOB_COMPLETE, (data) => {
    logger.info('Event JOB_COMPLETE received. Event Data:', data);
    onRequestComplete(data.requestId);
});

function createNewRequest (reqBody, callback) {
    switch (reqBody.type) {
        case 'VM':
            VMRequestHandler.createRequest(reqBody, (err, data) => {
                if (err) {
                    return callback(err);
                }
                EventBus.Emitter.emit(EventBus.Events.NEW_JOB, { jobId: data.jobId });
                return callback(null, data);
            });
            break;
        default:
            return callback(new Error('Request Type not supported'));
    }
}

function getRequest (requestId, callback) {
    if (requestId) {
        Request.findById(requestId, {}, (err, requests) => {
            if (err) {
                logger.error('Error occured while getting request from DB. Error:', err);
                return callback(err);
            }
            return callback(null, requests);
        });
    } else {
        Request.find({}, {}, (err, requests) => {
            if (err) {
                logger.error('Error occured while getting request from DB. Error:', err);
                return callback(err);
            }
            return callback(null, requests);
        });
    }
}

function onRequestComplete (requestId) {
    getRequest(requestId, (err, request) => {
        if (err) {
            logger.error('Error occured while getting request from DB. Error:', err);
            return;
        }
        switch (request.type) {
            case 'VM':
                VMRequestHandler.onRequestComplete(request);
                break;
            default:
                logger.error('Request Type not supported. Type:', request.type);
                break;
        }
    });
}

module.exports = {
    createRequest: createNewRequest,
    getRequest
};
