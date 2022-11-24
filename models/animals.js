// ---------------------------------------
// Dependencies
// ---------------------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ---------------------------------------
// Schema
// ---------------------------------------
const animalsSchema = new Schema(
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
const Animals = mongoose.model('Animals', animalsSchema);

// ---------------------------------------
// Export
// ---------------------------------------
module.exports = Animals;