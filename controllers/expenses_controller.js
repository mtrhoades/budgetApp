// dependencies
const express = require('express');

const pool = require('../models/db');

const expenses = express.Router();


// Routes:
    // READ ALL Route (GET)
expenses.get('/', async (req, res) => {
    try {
        const getExpenses = await pool.query(
            "SELECT * FROM expenses"
        );

        res.json(getExpenses.rows)

    } catch (error) {
        res.status(404).send('ERROR 404 Page Not Found!')
    }
});
    





module.exports = expenses;