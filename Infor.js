const mongoose = require('mongoose');

// Define the schema for storing user information
const InforSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Name of the person
    phone: { type: String, required: true }, // Phone number
    email: { type: String, required: true }, // Email address
    ticketCount: { type: Number, required: true, min: 1 } // Number of tickets ordered, must be at least 1
});

// Create the model
const InforModel = mongoose.model('Infor', InforSchema);

module.exports = InforModel;
