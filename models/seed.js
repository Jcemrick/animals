// ---------------------------------------
// Dependencies
// ---------------------------------------
require('dotenv').config();
const mongoose = require('./connection');
const Animals = require('./animals');

mongoose.connection.on('open', () => {

// ---------------------------------------
// Seed Data
// ---------------------------------------
    const baseAnimals = [
        { species: "Elephant", extinct: false, location: "Africa", lifeExpectancy: 50},
        { species: "Dolphin", extinct: false, location: "Ocean", lifeExpectancy: 60},
        { species: "Tiger", extinct: false, location: "Asia", lifeExpectancy: 10},
        { species: "Woolly Mammoth", extinct: true, location: "Asia", lifeExpectancy: 60},
        { species: "Orca", extinct: false, location: "Ocean", lifeExpectancy: 50}
    ]

    Animals.deleteMany({}, (err, data) => {
        Animals.create(baseAnimals, (err, data) => {
            res.json(data);
        })
    })
})

