const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger.middleware');
const studentRoutes = require('./routes/student.routes');
const notFound = require('./middlewares/notFound.middleware');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

// Middlewares
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/students', studentRoutes);

// 404 handler
app.use(notFound);

// Error handler
app.use(errorMiddleware);

module.exports = app;
