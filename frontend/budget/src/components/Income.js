import React from 'react';
import AddIncomeModal from './AddIncomeModal';


const Income = () => {
  return (
    <div>Income

        <AddIncomeModal />


        <table class="w-50 table table-success .table-hover .table-bordered border-success text-center">
            <thead>
                <tr style={{}}>
                    <th scope="col">Income Source</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date Recieved</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>







    </div>
  )
}


export default Income;