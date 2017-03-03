/* eslint-disable global-require, import/no-dynamic-require */

'use strict';

const logger = require('winston');
const Job = require('../models/job');
const EventBus = require('../event-bus');

EventBus.Emitter.on(EventBus.Events.TASK_ENQUEUE, (data) => {
    logger.info('Event TASK_ENQUEUE received. Data', data);
    executeTask(data.jobId);
});

function executeFlowStep (step, job) {
    logger.info('Start Executing flow step. Step Name:', step.name);
    switch (step.name) {
        case 'START':
            step.state = 'SUCCEEDED';
            job.save((err, job) => {
                if (err) {
                    logger.error('Error occured while saving job to DB. Error', err);
                    return;
                }
                EventBus.Emitter.emit(EventBus.Events.TASK_UPDATE, { jobId: job.get('id') });
            });
            break;
        case 'END':
            step.state = 'SUCCEEDED';
            job.status = 'SUCCEEDED';
            job.save((err, job) => {
                if (err) {
                    logger.error('Error occured while saving job to DB. Error', err);
                    return;
                }
                EventBus.Emitter.emit(EventBus.Events.TASK_UPDATE, { jobId: job.get('id') });
            });
            break;
        case 'KILL':
            step.state = 'SUCCEEDED';
            job.status = 'FAILED';
            // TODO: How do we roll back the work done by succeeded steps???????
            job.save((err, job) => {
                if (err) {
                    logger.error('Error occured while saving job to DB. Error', err);
                    return;
                }
                EventBus.Emitter.emit(EventBus.Events.TASK_UPDATE, { jobId: job.get('id') });
            });
            break;
        default:
            logger.error('Flow Task not supported. Task Name', step.name);
            break;
    }
}

function executeActionStep (queuedTask, job) {
    logger.info('Start Executing Action step. Step Name:', queuedTask.name);
    if (queuedTask.state === 'PREPARED' || queuedTask.state === 'WAITING') {
        queuedTask.state = 'RUNNING';
        const modulePath = `../third-party-worker/${queuedTask.module}`;
        const workerModule = require(modulePath);

        job.save((err, job) => {
            if (err) {
                logger.error('Error occured while saving job to DB. Error', err);
                return;
            }
            logger.info('Calling run method of worker module. Task:', JSON.stringify(queuedTask));
            const workerPromise = new Promise((resolve, reject) => {
                workerModule.run(queuedTask.toJSON(), (err, taskState, runtimeState, outputParameters) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({
                            taskState,
                            runtimeState,
                            outputParameters
                        });
                    }
                });
            });

            workerPromise.then((data) => {
                logger.info(`Promise resolved for run method of worker module. 
                Response Received:`, JSON.stringify(data));
                queuedTask.state = data.taskState;
                queuedTask.runtime_state = data.runtimeState;
                if (data.outputParameters) {
                    for (let paramIndex = 0; paramIndex < data.outputParameters.length; paramIndex++) {
                        const objParam = data.outputParameters[paramIndex];
                        const outputParam = queuedTask.output_params.filter((param) => {
                            return param.name === objParam.name;
                        })[0];

                        if (outputParam) {
                            outputParam.value = objParam.value;
                        } else {
                            logger.error(`Output parameter not found in output_params of step.
                            Param received from Service:`, objParam);
                        }
                    }
                }
                job.save((err, job) => {
                    if (err) {
                        logger.error('Error occured while saving job to DB. Error', err);
                        return;
                    }
                    EventBus.Emitter.emit(EventBus.Events.TASK_UPDATE, { jobId: job.get('id') });
                });
            })
            .catch((err) => {
                logger.error('Error occured while running task on worker module. Error:', err);
                queuedTask.state = 'FAILED';
                job.save((err, job) => {
                    if (err) {
                        return logger.error('Error occured while saving job to DB. Error:', err);
                    }
                    EventBus.Emitter.emit(EventBus.Events.TASK_UPDATE, { jobId: job.get('id') });
                });
            });
        });
    }
}

function executeTask (jobId) {
    logger.info('Start ExecuteTask for JobId:', jobId);
    Job.findById(jobId, {}, (err, job) => {
        if (err) {
            logger.error('Error occured while getting job from DB. Error', err);
            return;
        }
        const taskQueue = job.get('task_queue');
        if (taskQueue.length > 0) {
            for (let taskIndex = 0; taskIndex < taskQueue.length; taskIndex++) {
                const stepId = taskQueue[taskIndex];
                const queuedTask = job.steps.filter((step) => { return step.stepId === stepId; })[0];
                if (queuedTask.type === 'FLOW') {
                    executeFlowStep(queuedTask, job);
                } else {
                    executeActionStep(queuedTask, job);
                }
            }
        }
    });
}

module.exports = {
    // executeTask: executeTask
};
