// ---------------------------------------
// Dependencies
// ---------------------------------------
require('dotenv').config();
const mongoose = require('mongoose');

// ---------------------------------------
// Database Connections
// ---------------------------------------
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// ---------------------------------------
// Connection
// ---------------------------------------
mongoose.connect(DATABASE_URL, CONFIG);

// ---------------------------------------
// Logging Connections
// ---------------------------------------
mongoose.connection
.on('open', () => console.log("Connected to Mongoose!"))
.on('close', () => console.log("Disconnected from Mongoose!"))
.on('error', () => console.log(error))

// ---------------------------------------
// Logging Connections
// ---------------------------------------
module.exports = mongoose