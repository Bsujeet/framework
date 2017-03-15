'use strict';

const path = require('path');
const fs = require('fs');
const winston = require('winston');

const config = require.main.require('./config');

const appDir = path.dirname(require.main.filename);
const logDir = `${appDir}\\log`;

/**
 * The winston logger will log all the above level from default level set in console and in file
 * for example when we log error which is level 7 then all level which are less than 7
 * will loged in file and Console
 */

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, '0777');
}


const myCustomLevels = {
    levels: {
        admin: 0,
        info: 4,
        debug: 2,
        warning: 3,
        error: 1
    },
    colors: {
        admin: 'blue',
        debug: 'cyan',
        info: 'green',
        warning: 'yellow',
        error: 'red'
    }
};



/**
 * winston logger instance which is needed to export
 */

const customLevelLogger = new (winston.Logger)({
    exitOnError: false, // don't crash on exception
    level: config.Logger.logger.level,
    levels: myCustomLevels.levels,
    colors: myCustomLevels.colors,
    handleExceptions: true,
    transports: [
        new (winston.transports.Console)({
            colorize: true,
            prettyPrint: true
        }), // always use the console
        new (winston.transports.File)({
            name: 'file.server',
            filename: `${logDir}/server.log`,
            prettyPrint: true,
            colorize: true,
            json: true
        }), // log everything to the server.log
        new (winston.transports.File)({
            level: 'error',
            name: 'file.error',
            filename: `${logDir}/server.log`,
            handleExceptions: true,
            prettyPrint: true,
            colorize: true,
            json: true
        }), // log errors and exceptions to the error.log
        new (winston.transports.File)({
            level: 'warning',
            name: 'file.warning',
            filename: `${logDir}/server.log`,
            prettyPrint: true,
            colorize: true,
            json: true
        }), // log warn to the warn.log
        new (winston.transports.File)({
            level: 'info',
            name: 'file.info',
            filename: `${logDir}/server.log`,
            prettyPrint: true,
            colorize: true,
            json: true
        }), // log info to the info.log
        new (winston.transports.File)({
            level: 'admin',
            name: 'file.admin',
            filename: `${logDir}/server.log`,
            prettyPrint: true,
            colorize: true,
            json: true
        }) // log info to the info.log
    ]
});


module.exports = customLevelLogger;
