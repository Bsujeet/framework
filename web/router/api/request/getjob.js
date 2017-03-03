'use strict';

const joi = require('joi');
const WorkflowManager = require('../../../../workflow-manager');

const paramSchema = joi.object({
    jobId: joi.string()
})
    .unknown()
    .required();

function findJobs (req, resp) {
    const { error, value: reqParams } = joi.validate(req.params, paramSchema);
    if (error) {
        resp.status(400).send({ status: false, message: 'Invalid/Missing Parameters' }).end();
    }

    WorkflowManager.getJobs(reqParams.jobId, (err, jobs) => {
        if (err) {
            return resp.status(400).send({ status: false, message: 'Unable to find jobs' }).end();
        }
        return resp.status(200).send({ status: true, data: jobs }).end();
    });
}

module.exports = findJobs;
