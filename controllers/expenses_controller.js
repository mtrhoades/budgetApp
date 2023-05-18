// dependencies
const express = require('express');

const pool = require('../models/db');

const expense = express.Router();


// Routes:
    // READ ALL Route (GET)
expense.get('/', async (req, res) => {
    try {
        const getExpenses = await pool.query(
            "SELECT * FROM expenses"
        );

        res.json(getExpenses.rows)

    } catch (error) {
        res.status(404).send('ERROR 404 Page Not Found!')
    }
});

    // POST route
expense.post('/', async (req, res) => {
    try {
        const { expense_expense, expense_amount, expense_date } = req.body;
        const newExpense = await pool.query(
            "INSERT INTO expenses(expense_expense, expense_amount, expense_date) VALUES($1, $2, $3) RETURNING *",
            [expense_expense, expense_amount, expense_date]
        );

        res.json(newExpense.rows[0]);

    } catch (error) {
        res.status(404).send('ERROR 404 Page Not Found!')
    }
});

    // DELETE route
expense.delete('/:expense_id', async function (req, res) {
    try {
        const { expense_id } = req.params;
        const deleteExpense = await pool.query(
            "DELETE FROM expenses WHERE expense_id = $1",
            [expense_id]
        );

        res.json('Expense Deleted');

    } catch (error) {
        res.status(404).send('ERROR 404 Page Not Found!');
    }
});



module.exports = expense;