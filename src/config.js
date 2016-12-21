/**
 * Application configuration settings
 */

import bluebird from 'bluebird';

/**
 * Port to use
 */
export const port = process.env.PORT || 3000;

/**
 * Mailgun configuration
 */
export const apiKey = process.env.MAILGUN_API_KEY;
export const domain = process.env.MAILGUN_DOMAIN;
export const fromWho = process.env.MAILGUN_FROM;

/**
 * Database configuration
 * Connection url and connection options for mongoose
 * Adding promiseLibrary in options to be able to use MongoDB driver directly
 */
export const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/notifyMe';
export const databaseOptions = {
    server: {
        poolSize: 4
    },
    promiseLibrary: bluebird
};
