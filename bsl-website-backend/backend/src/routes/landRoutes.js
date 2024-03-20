// src/routes/landRoutes.js
const express = require('express');
const router = express.Router();
const landController = require('../controllers/landController');

// Route for creating a new land listing
router.post('/land', landController.createLand);

// Route for updating the rating of a land listing
router.post('/land/rating', landController.updateRating);

// Route for getting all land listings
router.get('/land', landController.getAllLand);

// Route for getting a single land listing by ID
router.get('/land/:id', landController.getLandById);

// Route for updating a land listing by ID
router.put('/land/:id', landController.updateLandById);

// Route for deleting a land listing by ID
router.delete('/land/:id', landController.deleteLandById);

// Route for updating the rating of a land listing
router.put('/land/:id/rating', landController.updateRatingById);

module.exports = router;
