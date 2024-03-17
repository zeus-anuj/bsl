// src/app.js
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded requests
app.use(logger); // Logging middleware

// Routes
app.use('/', routes); // Mount routes at the root URL

// Error Handling
app.use(errorHandler); // Error handling middleware

module.exports = app;
