// src/models/land.js
const mongoose = require('mongoose');

// Define the schema for the Land model
const landSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'], // Specify the type as 'Point' for GeoJSON
            required: true
        },
        coordinates: {
            type: [Number], // Array of two numbers [longitude, latitude]
            required: true
        }
    },
    size: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true // Add createdAt and updatedAt fields to the document
});

// Create a model using the schema
const Land = mongoose.model('Land', landSchema);

module.exports = Land;
