// dependencies
const express = require('express');

const pool = require('../models/db');

const bankaccount = express.Router();

// routes:
    // bank accounts READ All ROUTE (list all rows)
bankaccount.get('/', async (req, res) => {
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
bankaccount.post('/', async (req, res) => {
    try {
        const { account_name, account_type, balance, account_date } = req.body;
        const newAccount = await pool.query(
            "INSERT INTO bankaccounts(account_name, account_type, balance, account_date) VALUES($1, $2, $3, $4) RETURNING *",
            [account_name, account_type, balance, account_date]
        );

        res.json(newAccount.rows[0]);

    } catch (error) {
        res.status(404).send('Error 404 Page Not Found!')
    }
});


// DELETE ROUTE for bank accounts component
bankaccount.delete('/:account_id', async (req, res) => {
    try {
        const { account_id } = req.params;
        const deleteAccount = await pool.query(
            "DELETE FROM bankaccounts WHERE account_id = $1",
            [account_id]
        );

        res.json("Account Deleted!")

    } catch (error) {
        res.status(404).send('Error 404 Page Not Found!')
    }
});


// GET request for a single bank account
bankaccount.get('/:account_id', async (req, res) => {
    try {
        const { account_id } = req.params;
        const account = await pool.query(
            "SELECT * FROM bankaccounts WHERE account_id = $1",
            [account_id]
        );

        res.json(account.rows[0]);

    } catch (error) {
        res.status(404).send('Error 404 Page Not Found!')
    }
});





module.exports = bankaccount;