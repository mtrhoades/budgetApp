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

income.post('/', async (req, res) => {
    try {
        const { income_source, income_amount, income_date } = req.body;
        const newIncome = await pool.query(
            "INSERT INTO income(income_source, income_amount, income_date) VALUES($1, $2, $3) RETURNING *", 
            [income_source, income_amount, income_date]
        );

            res.json(newIncome.rows[0])

    } catch (error) {
        res.status(404).send('Error 404 Page Not Found!');
    }
});

income.delete()


module.exports = income;