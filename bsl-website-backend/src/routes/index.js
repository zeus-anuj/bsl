// src/routes/index.js
const express = require('express');
const router = express.Router();
const landRoutes = require('./landRoutes');

// Mount land routes under the /lands path prefix
router.use('/lands', landRoutes);

module.exports = router;
