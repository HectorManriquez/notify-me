/**
 * API routes for interacting with the database
 * All routes are part of /api
 */

import express from 'express';
import Promise from 'bluebird';
import Mailgun from 'mailgun-js';
import Agenda from 'agenda';

import {
    apiKey,
    domain,
    fromWho,
    databaseUrl
} from './config';
import Notification from './data/models/Notification'

const router = express.Router();

/**
 * Setting up agenda mongo connection
 */
const agenda = new Agenda({
    db: {
        address: databaseUrl,
        collection: 'agendaJobs'
    },
    options: {
        server: {
            auto_reconnect: true
        }
    }
});

/**
 * Starts agenda to be able to assign jobs to it
 */
agenda.on('ready', function () {
    agenda.start();
});

/**
 * GET /getNotification
 */
router.get('/getNotification/:pillName', (req, res) => {
    Notification.findOne({pillName: req.params.pillName}, (err, notification) => {
        if (err) {
            res.send({
                status: 'notification not found'
            });
        } else {
            res.send({
                status: 'found notification',
                notificationInfo: notification
            });
        }
    })
});

/**
 * GET /getNotifications
 */
router.get('/getNotifications', (req, res) => {
    Notification.find({}, (err, notifications) => {
        if (err) {
            res.send({
                status: 'notifications not found'
            });
        } else {
            res.send({
                notifications: notifications
            });
        }
    })
});

/**
 * POST /createNotification
 */
router.post('/createNotification', (req, res) => {
    Notification.create({
        pillName: req.body.pillName,
        time: req.body.time,
        email: req.body.email
    }, (err) => {
        if (err) {
            res.send({
                status: 'failed to create notification'
            });
        } else {
            addToAgenda(req.body.pillName, req.body.time);
            res.send({
                status: 'notification created'
            });
        }
    })
});

/**
 * POST /updateNotification
 */
router.post('/updateNotification', (req, res) => {
    console.log(req.body);

    Notification.findByIdAndUpdate(req.body.id, {
        pillName: req.body.pillName,
        time: req.body.time,
        email: req.body.email
    }, {
        new: false
    }, (err, notification) => {
        if (err) {
            res.send({
                status: 'failed to update notification'
            });
        } else {
            console.log(notification);
            agenda.cancel({
                name: 'notify me ' + notification.pillName
            }, (err, numRemoved) => {
                addToAgenda(req.body.pillName, req.body.time);
                res.send({
                    status: 'notification updated'
                });
            });
        }
    })
});

/**
 * Helper  functions for agenda
 * Notification model will handle all the data associated with a job
 */
function addToAgenda(pillName, time) {
    agenda.define('notify me ' + pillName, (job, done) => {
        Notification.findOne({pillName: pillName}, (err, notification) => {
            if (err) {
                console.log('No notification found')
            } else {
                sendMail(
                    notification.email,
                    'Reminder to take your pill',
                    'You should take your ' + notification.pillName + ' pill now.'
                );
            }
            done();
        });
    });

    agenda.every(time, 'notify me ' + pillName);
}

/**
 * POST /sendMail
 * Testing mailgun
 */
router.post('/sendMail', (req, res) => {
    sendMail(req.body.to, req.body.subject, req.body.message)
        .then((status) => {
            if (status.status) {
                res.send({
                    status: 'email sent'
                });
            } else {
                res.send({
                    status: 'failed to send',
                    error: err
                });
            }
        });
});

/**
 * Helper functions for mailgun
 */

/**
 * Returns a promise of whether email was sent successfully or  not
 * @param to
 * @param subject
 * @param message
 */
function sendMail(to, subject, message) {
    return new Promise((resolve, reject) => {
        const mailgun = new Mailgun({
            apiKey: apiKey,
            domain: domain
        });

        const data = {
            from: fromWho,
            to: to,
            subject: subject,
            text: message
        };

        mailgun.messages().send(data, (err, body) => {
            if (err) {
                reject({
                    status: false,
                    error: err
                });
            } else {
                resolve({
                    status: true,
                    email: to
                })
            }
        })
    });
}

export default router;