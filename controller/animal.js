// ---------------------------------------
// Dependencies
// ---------------------------------------
const express = require('express');
const Animal = require('../models/animal');

// ---------------------------------------
// Create Router
// ---------------------------------------
const router = express.Router();

// ---------------------------------------
// Error Handler
// ---------------------------------------
function errorHandler(error, res) {
    res.json(error)
}

// ---------------------------------------
// Routes - INDUCES
// ---------------------------------------
// Seed
router.get('/seed', async (req, res) => {
    await Animal.remove({}).catch((error) => errorHandler(error, res))
    const animals = await Animal.create([
        { species: "Elephant", extinct: false, location: "Africa", lifeExpectancy: 50},
        { species: "Dolphin", extinct: false, location: "Ocean", lifeExpectancy: 60},
        { species: "Tiger", extinct: false, location: "Asia", lifeExpectancy: 10},
        { species: "Woolly Mammoth", extinct: true, location: "Asia", lifeExpectancy: 60},
        { species: "Orca", extinct: false, location: "Ocean", lifeExpectancy: 50}
    ]).catch((error) => errorHandler(error, res));
    res.json(animals)
})

// Index Route
router.get('/', async (req, res) => {
    const animals = await Animal.find({}).catch((error) => errorHandler (error, res))
    res.render('animal/index.ejs', {animals})
})



// New Route




// Destroy Route




// Update Route




// Create Route




// Edit Route




// Show Route
router.get('/:id', async (req, res) => {
    const animal = await Animal.findById(req.params.id)
    res.render('animal/show.ejs', {animal})
})


// ---------------------------------------
// Export
// ---------------------------------------
module.exports = router