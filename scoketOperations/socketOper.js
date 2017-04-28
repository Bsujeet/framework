'use strict';

const loadAsh = require('lodash');
const logger = require.main.require('./logger');
// const EventBus = require.main.require('./event-bus');
const EventBus = require('../event-bus');




EventBus.Emitter.on(EventBus.Events.BROWSER_PUSH, (data) => {
    try {
        if (global.SocketToken && global.activeSocketUser[global.SocketToken]) {
            senduserNotification(data.updatedRequestData);
        }
    } catch (error) {
        logger.info('error in socketOper.js ' + error);
    }
});

function senduserNotification(dataToSend) {
    const dataToSendNew = loadAsh.merge(dataToSend.req, dataToSend.addInfo);

    logger.debug('Send socket notification');
    global.activeSocketUser.global.SocketToken.emit('notification', {
        dataToSendNew
    });
}

module.exports = {
    senduserNotification
};