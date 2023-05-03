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
        const {accountType, accountName, balance} = req.body;
        const newAccount = await pool.query(
            "INSERT INTO bankaccounts (account_type, account_name, account_balance) VALUES($1, $2, $3) RETURNING *",
            [accountType, accountName, balance]
        );

        res.json(newAccount.rows[0]);

    } catch (error) {
        res.status(404).send('Error 404 Page Not Found!')
    }
})



module.exports = budget;