import React, { useState, useEffect } from 'react';
import AddExpenseModal from './AddExpenseModal';


const Expenses = () => {
  // vanilla js section:

  // useState section:
const [expenses, setExpenses] = useState([]);


// fetch request for GET REQUEST HERE!
const getExpenses = async () => {
  try {
      const response = await fetch('http://localhost:3027/expense');
      const jsonData = await response.json();

      console.log(jsonData);

      setExpenses(jsonData);

  } catch (error) {
      console.error(error.message)
  }
};


// useEffect HERE!
useEffect(() => {
  getExpenses();
}, []);

  // jsx section:
  return (
    <div>
        <h3>Expenses</h3>

        <AddExpenseModal />

        <table className="w-50 table table-danger .table-hover .table-bordered border-danger text-center">
            <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Expense</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date Due</th>
                </tr>
            </thead>
            <tbody>
              {expenses.map(expense => (
              <tr key={expense.expense_id}>
                <td>delete button here</td>
                <td>{expense.expense_expense}</td>
                <td>{expense.expense_amount}</td>
                <td>{expense.expense_date.split('', 10)}</td>
              </tr>
              ))}
            </tbody>
        </table>


    </div>
  )
}


export default Expenses;