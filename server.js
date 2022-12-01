// ---------------------------------------
// Dependencies
// ---------------------------------------
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const animalRouter = require('./controller/animal')

const app = express();

const port = process.env.PORT;

// ---------------------------------------
// Middleware
// ---------------------------------------
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));

// ---------------------------------------
// Server Routes
// ---------------------------------------
app.get('/', (req, res) => {
    res.redirect('/animal')
})

app.use('/animal', animalRouter)


// ---------------------------------------
// Listener
// ---------------------------------------
app.listen(port, () => console.log(`Listening on ${port}`))