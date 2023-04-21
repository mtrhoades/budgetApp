import React from 'react';
import AddExpenseModal from './AddExpenseModal';


const Expenses = () => {
  return (
    <div>Expenses

        <AddExpenseModal />

        <table class="w-50 table table-danger .table-hover .table-bordered border-danger text-center">
            <thead>
                <tr style={{}}>
                    <th scope="col">Expense</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date Due</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>




    </div>
  )
}


export default Expenses;