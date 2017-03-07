'use strict';

const joi = require('joi');

const envVarsSchema = joi.object({
    DBPORT: joi.number()
        .default(27017),
    DBHOST: joi.string()
        .default('172.17.163.56'),
    DB: joi.string()
        .default('dcmf')
})
.unknown()
.required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    port: envVars.DBPORT,
    host: envVars.DBHOST,
    db: envVars.DB
};

module.exports = config;
