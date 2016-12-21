/**
 * Notification model
 */

import mongooseConn from '../mongoose';
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    pillName: {
        type: String,
        require: true
    },
    time:{
        type: String,
        require: true
    }
}, {
    timestamps: true
});

const Notification = mongooseConn.model('Notification', notificationSchema);

export default Notification;