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


// helper function for total at end of table
const totalBalance = (accounts) => {
    let sum = 0;
    for(let i = 0; i < accounts.length; i++) {
        sum = sum + accounts.balance[i]
    }
};

console.log(totalBalance())


// useEffect section:
useEffect(() => {
    getAccounts();
}, []);


  return (
    <div>
        <h3>BankAccounts</h3>

        <AddBankAccountModal />

        <table className="table table-info table-hover .table-bordered border-info text-center">
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
                <tr>
                    <td></td>
                    <td></td>
                    <td style={{fontWeight: 'bold'}}>Total</td>
                    <td>{}</td>
                </tr>
                
            </tbody>
        </table>




    </div>
  )
}


export default BankAccounts;