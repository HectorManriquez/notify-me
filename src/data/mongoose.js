/**
 * Mongoose connection
 */

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import {
    databaseUrl,
    databaseOptions
} from '../config';

/**
 * Make bluebird default mongoose promises library not using MongoDB driver
 */
mongoose.Promise = bluebird;
const mongooseConn = mongoose.createConnection(databaseUrl, databaseOptions);

mongooseConn.on('error', () => {
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

mongooseConn.once('open', function() {
    console.log('Mongoose connection successful.');
});

export default mongooseConn;