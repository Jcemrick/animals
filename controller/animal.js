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
router.get('/new', (req, res) => {
    res.render('animal/new.ejs')
})



// Destroy Route
router.delete('/:id', async (req, res) => {
    await Animal.findByIdAndRemove(req.params.id).catch((error) => errorHandler(error, res))
    res.redirect('/animal')
})



// Update Route
router.put('/:id', async (req, res) =>{
    req.body.extinct = Boolean(req.body.extinct)
    await Animal.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/animal')
})



// Create Route
router.post('/', async (req, res) => {

    req.body.extinct = Boolean(req.body.extinct)
    await Animal.create(req.body).catch((error) => errorHandler(error, res));

    res.redirect('/animal')
})



// Edit Route
router.get('/:id/edit', async (req, res) => {
    const animal = await Animal.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render('animal/edit.ejs', {animal})
})



// Show Route
router.get('/:id', async (req, res) => {
    const animal = await Animal.findById(req.params.id).catch((error) => errorHandler(error, res))
    res.render('animal/show.ejs', {animal})
})


// ---------------------------------------
// Export
// ---------------------------------------
module.exports = router