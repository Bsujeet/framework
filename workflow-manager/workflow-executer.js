'use strict';

const logger = require('winston');
const Job = require('../models/job');
const EventBus = require('../event-bus');

function populateTaskParameters (job, stepId) {
    const step = job.steps.filter((step) => { return step.stepId === stepId; })[0];

    const parameterMappings = job.parameter_mappings.filter((mapping) => { return mapping.to.step === stepId; });
    for (let mappingIndex = 0; mappingIndex < parameterMappings.length; mappingIndex++) {
        if (parameterMappings[mappingIndex].from.step === 'workflow') {
            // Map from workflow parameters
            const fromParam = parameterMappings[mappingIndex].from.parameter;
            const wfParam = job.parameters.filter((param) => { return param.name === fromParam; })[0];

            const toParam = parameterMappings[mappingIndex].to.parameter;
            const stepParam = step.input_params.filter((param) => { return param.name === toParam; })[0];

            if (wfParam && stepParam) {
                // TODO: Put other validations before value assignment as and when required.
                stepParam.value = wfParam.value;
            } else {
                logger.error(`Parameter defined in Mapping does not exists in Workflow Param List and/or
                Step Parameter list. From Param:`, fromParam);
            }
        } else if (parameterMappings[mappingIndex].from.step === 'global') {
            // Map from global parameters
            // TODO: Write this code later
        } else {
            // Map from step output parameter
            const fromStepId = parameterMappings[mappingIndex].from.step;
            const fromStep = job.steps.filter((step) => { return step.stepId === fromStepId; })[0];
            const fromParam = parameterMappings[mappingIndex].from.parameter;
            const fromStepParam = fromStep.output_params.filter((param) => { return param.name === fromParam; })[0];

            const toParam = parameterMappings[mappingIndex].to.parameter;
            const toStepParam = step.input_params.filter((param) => { return param.name === toParam; })[0];
            if (toStepParam && fromStepParam) {
                // TODO: Put other validations before value assignment as and when required.
                toStepParam.value = fromStepParam.value;
            } else {
                logger.error(`Parameter defined in Mapping does not exists in From Step Param List and/or
                To Step Parameter list.From Param:`, fromParam);
            }
        }
    }
}


function executeJob (jobId) {
    logger.info('Start executeJob for JobId:', jobId);
    Job.findById(jobId, {}, (err, job) => {
        if (err) {
            logger.error('Error occured while getting job from DB. Error', err);
            return;
        }
        const taskQueue = job.get('task_queue');
        const taskToEnqueue = [];
        if (taskQueue.length === 0 && job.get('status') === 'SAVED') {
            job.status = 'INPROGRESS';
            taskToEnqueue.push(job.start_step);
            populateTaskParameters(job, job.start_step);
        } else if (taskQueue.length > 0 && job.get('status') === 'INPROGRESS') {
            for (let taskIndex = 0; taskIndex < taskQueue.length; taskIndex++) {
                const stepId = taskQueue[taskIndex];
                const queuedTask = job.steps.filter((step) => { return step.stepId === stepId; })[0];
                if (queuedTask.state === 'SUCCEEDED') {
                    // Remove item from the queue.
                    taskQueue.splice(taskIndex, 1);
                    taskToEnqueue.push(queuedTask.ok);
                    populateTaskParameters(job, queuedTask.ok);
                } else if (queuedTask.state === 'FAILED') {
                    taskQueue.splice(taskIndex, 1);
                    taskToEnqueue.push(queuedTask.error);
                    populateTaskParameters(job, queuedTask.error);
                } else if (queuedTask.state === 'KILLED') {
                    taskQueue.splice(taskIndex, 1);
                }
            }
        }
        if (taskToEnqueue.length > 0) {
            for (let taskIndex = 0; taskIndex < taskToEnqueue.length; taskIndex++) {
                taskQueue.push(taskToEnqueue[taskIndex]);
            }
            job.save((err, job) => {
                if (err) {
                    logger.error('Error occured while saving job. Error', err);
                    return;
                }
                logger.info('Raising TASK_ENQUEUE event. Job ID', job.get('id'));
                EventBus.Emitter.emit(EventBus.Events.TASK_ENQUEUE, { jobId: job.get('id') });
            });
        }

        if (job.get('status') === 'SUCCEEDED' || job.get('status') === 'FAILED') {
            const eventData = { jobId: job.get('id'), requestId: job.requestId };
            logger.info('Raising JOB_COMPLETE event. Event Data:', eventData);
            EventBus.Emitter.emit(EventBus.Events.JOB_COMPLETE, eventData);
        }
    });
}

module.exports = {
    executeJob
};
