import React, { useState, useEffect } from 'react';
import AddBankAccountModal from './AddBankAccountModal';



const BankAccounts = () => {
// vanilla js section:

// useState section:
const [accounts, setAccounts] = useState([]);


// helper function section:
    // fetch request to backend
const getAccounts = async () => {
    try {
        const response = await fetch('http://localhost:3027/budget');
        const jsonData = await response.json();

        console.log(jsonData);

        setAccounts(jsonData);

    } catch (error) {
        console.error(error.message)
    }
};

// useEffect section:
useEffect(() => {
    getAccounts();
}, []);

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
                {accounts.map(account => (
                <tr key={account.account_id}>
                    <td>{account.account_name}</td>
                    <td>{account.account_type}</td>
                    <td>{account.account_balance}</td>
                    <td>{account.account_date.split('', 10)}</td>
                </tr>
                ))}
                
            </tbody>
        </table>




    </div>
  )
}


export default BankAccounts;