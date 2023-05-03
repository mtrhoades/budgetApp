/* set up server: */

// Dependencies
const express = require('express');
const cors = require('cors');

// configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// root route (landing page)
app.get('/', (req, res) => {
    res.send("We up in here on that landing page though!")
});

// controller route
const budgetController = require('./controllers/budget_controller');
app.use('/budget', budgetController);

// server listen
app.listen(PORT, () => {
    console.log('Yeahhh we connected up in here!')
});
