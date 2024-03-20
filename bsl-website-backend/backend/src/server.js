require('dotenv').config(); // Load environment variables from .env file
const app = require('./app'); // Assuming your Express app file is named 'app.js'
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit with failure status
    });

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
