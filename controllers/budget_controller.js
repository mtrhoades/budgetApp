// dependencies
const express = require('express');

const pool = require('../models/db');

const budget = express.Router();

// routes:
    // bank accounts READ All ROUTE (list all rows)
budget.get('/', async (req, res) => {
    try {
        const allAccounts = await pool.query(
            "SELECT * FROM bankaccounts"
        );

        res.json(allAccounts.rows);

    } catch (error) {
        res.status(404).send('Error 404 Page Not Found!')
    }
});

    // bank accounts modal CREATE ROUTE (updating/POSTING info. from modal)
budget.post('/', async (req, res) => {
    try {
        const { balance } = req.body;
        const newAccount = await pool.query(
            "INSERT INTO bankaccounts (balance) VALUES($1) RETURNING *",
            [balance]
        );

        res.json(newAccount.rows[0]);

    } catch (error) {
        res.status(404).send('Error 404 Page Not Found!')
    }
})



module.exports = budget;