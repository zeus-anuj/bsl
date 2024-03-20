// src/controllers/landController.js
const Land = require('../models/land');

// Controller function for creating a new land document
const createLand = async (req, res) => {
    try {
        const { title, description, price, location, size, rating } = req.body;
        const newLand = new Land({
            title,
            description,
            price,
            location,
            size,
            rating
        });
        const savedLand = await newLand.save();
        res.status(201).json(savedLand);
    } catch (error) {
        console.error('Error creating land:', error);
        res.status(500).json({ error: 'Error creating land' });
    }
};

// Controller function for updating the rating of a land document
const updateRating = async (req, res) => {
    try {
        const { landId } = req.params;
        const { newRating } = req.body;
        const updatedLand = await Land.findByIdAndUpdate(landId, { rating: newRating }, { new: true });
        if (!updatedLand) {
            return res.status(404).json({ error: 'Land not found' });
        }
        res.json(updatedLand);
    } catch (error) {
        console.error('Error updating land:', error);
        res.status(500).json({ error: 'Error updating land' });
    }
};

// Controller function for getting all land listings
const getAllLand = async (req, res) => {
    try {
        const lands = await Land.find();
        res.json(lands);
    } catch (error) {
        console.error('Error getting land listings:', error);
        res.status(500).json({ error: 'Error getting land listings' });
    }
};

// Controller function for getting a single land listing by ID
const getLandById = async (req, res) => {
    try {
        const { id } = req.params;
        const land = await Land.findById(id);
        if (!land) {
            return res.status(404).json({ error: 'Land not found' });
        }
        res.json(land);
    } catch (error) {
        console.error('Error getting land by ID:', error);
        res.status(500).json({ error: 'Error getting land by ID' });
    }
};

// Controller function for updating a land listing by ID
const updateLandById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedLand = await Land.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLand) {
            return res.status(404).json({ error: 'Land not found' });
        }
        res.json(updatedLand);
    } catch (error) {
        console.error('Error updating land by ID:', error);
        res.status(500).json({ error: 'Error updating land by ID' });
    }
};

// Controller function for deleting a land listing by ID
const deleteLandById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLand = await Land.findByIdAndDelete(id);
        if (!deletedLand) {
            return res.status(404).json({ error: 'Land not found' });
        }
        res.json({ message: 'Land deleted successfully' });
    } catch (error) {
        console.error('Error deleting land by ID:', error);
        res.status(500).json({ error: 'Error deleting land by ID' });
    }
};

const updateRatingById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { newRating } = req.body;
        const updatedLand = await Land.findByIdAndUpdate(id, { rating: newRating }, { new: true });
        if (!updatedLand) {
            return res.status(404).json({ error: 'Land not found' });
        }
        res.json(updatedLand);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createLand,
    updateRating,
    getAllLand,
    getLandById,
    updateLandById,
    deleteLandById,
    updateRatingById
};
