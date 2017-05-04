'use strict';

const nodemailer = require('nodemailer');
const EventBus = require('../event-bus');
const user = require('../models/user');

const logger = require.main.require('./logger');

EventBus.Emitter.on(EventBus.Events.SEND_MAIL, (data) => {
    // if (data in data) {
    //     data = data.data._doc;
    // } else {
    //     data = data.request._doc;
    // }

    const userQuery = {};
    const datatoSend = {};
    try {
        logger.debug('data');
        logger.debug(data);
        userQuery.userId = data.requestedBy;
        user.findOne(userQuery, {
            password: 0
        }, (err, users) => {
            if (err) {
                logger.error('error occured while finding user ' + data.requestedBy);
            } else {
                datatoSend.mail = users.mail;
                if (data.status == 'SAVED') {
                    datatoSend.body = 'New req created for VM ' + data.operation + ' for name ' + data.name;
                } else if (data.status == 'SUCCEEDED') {
                    datatoSend.body = 'Request for VM ' + data.operation + ' for name ' + data.name + ' has sussefully completed';
                } else {
                    datatoSend.body = 'Request for VM ' + data.operation + ' for name ' + data.name + ' has failed';
                }
                sendmail(datatoSend);
            }
        });
    } catch (err) {
        logger.info('not able to send mail');
        logger.info(err);
    }
});



function sendmail(toSend) {
    logger.debug(toSend);
    const config = {
        host: '192.168.206.109',
        port: 587,
        secure: false,
        auth: {
            user: 'monitor',
            pass: 'monitor'
        },
        tls: {
            rejectUnauthorized: false
        }
    };
    const transporter = nodemailer.createTransport(config);

    const mailOptions = {
        from: 'DCMF@calsoftinc.com',
        to: toSend.mail,
        subject: 'DCMF Framework',
        html: toSend.body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return logger.info(error);
        }
        logger.info(info);
    });
}

module.exports = {
    sendmail
};