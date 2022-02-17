const express = require('express');
const charactersRoutes = require('./routes/characters.route');
// Express
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(charactersRoutes);

module.exports = app;
