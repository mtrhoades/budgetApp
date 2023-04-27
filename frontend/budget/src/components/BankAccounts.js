import React from 'react';
import AddBankAccountModal from './AddBankAccountModal';



const BankAccounts = () => {
  return (
    <div>
        <h3>BankAccounts</h3>

        <AddBankAccountModal />

        <table className="w-50 table table-info table-hover .table-bordered border-info text-center">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Current Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>FHB</td>
                    <td>Checking</td>
                    <td>$400.76</td>
                    <td>04/21/2023</td>
                </tr>
                
            </tbody>
        </table>




    </div>
  )
}


export default BankAccounts;