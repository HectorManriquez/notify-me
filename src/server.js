/**
 * Server configuration
 */

/**
 * Module dependencies
 */
import 'babel-polyfill';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';

import routes from './routes';
import apiRoutes from './apiRoutes';
import {
    port,
    databaseUrl
} from './config';

/**
 * Create express instance
 */
const app = express();

/**
 * Express configuration
 */
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Register routes in express
 */
app.use('/api', apiRoutes);
app.use('/', routes);

/**
 * Launch the server
 */
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});