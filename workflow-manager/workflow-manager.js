'use strict';

const logger = require('winston');
const Job = require('../models/job');
const EventBus = require('../event-bus');
const workflowExecuter = require('./workflow-executer');

EventBus.Emitter.on(EventBus.Events.NEW_JOB, (data) => {
    executeWorkflow(data.jobId);
});

EventBus.Emitter.on(EventBus.Events.TASK_UPDATE, (data) => {
    executeWorkflow(data.jobId);
});

function getJobs (jobId, callback) {
    if (jobId) {
        Job.findById(jobId, {}, (err, jobs) => {
            if (err) {
                logger.error('Error occured while getting job from DB. Error', err);
                return callback(err);
            }
            return callback(null, jobs);
        });
    } else {
        Job.find({}, {}, (err, jobs) => {
            if (err) {
                logger.error('Error occured while getting job from DB. Error', err);
                return callback(err);
            }
            return callback(null, jobs);
        });
    }
}

function executeWorkflow (jobId) {
    workflowExecuter.executeJob(jobId);
}

module.exports = {
    getJobs
};
