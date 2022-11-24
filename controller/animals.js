// ---------------------------------------
// Dependencies
// ---------------------------------------
const express = require('express');
const Animals = require('../models/animals');

// ---------------------------------------
// Create Router
// ---------------------------------------
const router = express.Router();

// ---------------------------------------
// Routes
// ---------------------------------------

router.get('/', (req, res) => {
    console.log("Got data")
})

router.get('/animals/seed', (req, res) => {

})


// ---------------------------------------
// Export
// ---------------------------------------
module.exports = router