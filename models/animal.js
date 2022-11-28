// ---------------------------------------
// Dependencies
// ---------------------------------------
const mongoose = require('./connection');

// ---------------------------------------
// Schema
// ---------------------------------------
const animalSchema = new mongoose.Schema(
    {
        species: String,
        extinct: Boolean,
        location: String,
        lifeExpectancy: Number
}
);

// ---------------------------------------
// Schema - Model
// ---------------------------------------
const Animal = mongoose.model('Animal', animalSchema);

// ---------------------------------------
// Export
// ---------------------------------------
module.exports = Animal;