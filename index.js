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

// controller routes:
    // bank accounts controller
const bankAccountController = require('./controllers/bankaccount_controller');
app.use('/bankaccount', bankAccountController);

    // income controller
const incomeController = require('./controllers/income_controller');
app.use('/income', incomeController);

// server listen
app.listen(PORT, () => {
    console.log('Yeahhh we connected up in here!')
});
