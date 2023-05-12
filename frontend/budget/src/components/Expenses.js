import React, { useState } from 'react';
import AddExpenseModal from './AddExpenseModal';


const Expenses = () => {
  // vanilla js section:

  // useState section:
const [expenses, setExpenses] = useState([]);



  // jsx section:
  return (
    <div>
        <h3>Expenses</h3>

        <AddExpenseModal />

        <table className="w-50 table table-danger .table-hover .table-bordered border-danger text-center">
            <thead>
                <tr>
                    <th scope="col">Expense</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date Due</th>
                </tr>
            </thead>
            <tbody>
              {expenses.map(expense => (
              <tr key={expense.expense_id}>
                <td>{expense.expense_expense}</td>
              </tr>
              ))}
            </tbody>
        </table>




    </div>
  )
}


export default Expenses;