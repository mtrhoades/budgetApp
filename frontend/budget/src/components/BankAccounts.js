import React, { useState, useEffect } from 'react';
import AddBankAccountModal from './AddBankAccountModal';
import CloseButton from 'react-bootstrap/CloseButton';



const BankAccounts = () => {
// vanilla js section:

// useState section:
const [accounts, setAccounts] = useState([]);


// helper function section:
    // fetch GET request to backend
const getAccounts = async () => {
    try {
        const response = await fetch('http://localhost:3027/bankaccount');
        const jsonData = await response.json();

        console.log(jsonData);

        setAccounts(jsonData);

    } catch (error) {
        console.error(error.message)
    }
};

// fetch Delete request for delete buttons
const deleteAccount = async (account_id) => {
    try {
       await fetch(`http://localhost:3027/bankaccount/${account_id}`, {
        method: 'DELETE'
       });

       setAccounts(accounts.filter(account => account.account_id !== account_id));

    } catch (error) {
        console.error(error.message);
    }
}


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
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Current Date</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map(account => (
                <tr key={account.account_id}>
                    <td>
                        <CloseButton
                            style={{width: '6px', height: '6px'}} 
                            onClick={() => deleteAccount(account.account_id)}
                        />
                    </td>
                    <td>{account.account_name}</td>
                    <td>{account.account_type}</td>
                    <td>{account.balance}</td>
                    <td>{account.account_date.split('', 10)}</td>
                </tr>
                ))}
                
            </tbody>
        </table>




    </div>
  )
}


export default BankAccounts;