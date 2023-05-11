// dependencies
const express = require('express');

const pool = require('../models/db');

const income = express.Router();

// routes:
    // income READ ALL route (GET)
income.get('/', async (req, res) => {
    try {
        const getIncome = await pool.query(
            "SELECT * FROM income"
        );

        res.json(getIncome.rows)

    } catch (error) {
        res.status(404).send('ERROR 404 Page Not Found!')
    }
});



module.exports = income;