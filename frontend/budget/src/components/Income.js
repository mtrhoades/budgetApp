import React, { useState, useEffect } from 'react';
import AddIncomeModal from './AddIncomeModal';
import CloseButton from 'react-bootstrap/CloseButton';


const Income = () => {
// vanilla js section:

// useState section
const [incomes, setIncomes] = useState([]);


// helper function section:
    // fetch GET request to backend
    const getIncomes = async () => {
      try {
          const response = await fetch('http://localhost:3027/income');
          const jsonData = await response.json();
  
          console.log(jsonData);
  
          setIncomes(jsonData);
  
      } catch (error) {
          console.error(error.message)
      }
  };

// fetch Delete request for delete buttons
const deleteIncome = async (income_id) => {
  try {
     await fetch(`http://localhost:3027/income/${income_id}`, {
      method: 'DELETE'
     });

     setIncomes(incomes.filter(income => income.income_id !== income_id));

  } catch (error) {
      console.error(error.message);
  }
}


  // useEffect section
useEffect(() => {
  getIncomes();
}, []);



  return (
    <div>
        <h3>Income</h3>

        <AddIncomeModal />


        <table className="w-50 table table-success .table-hover .table-bordered border-success text-center">
            <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Income Source</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Date Recieved</th>
                </tr>
            </thead>
            <tbody>
                {incomes.map(income => (
                <tr key={income.income_id}>
                    <td>
                      <CloseButton
                        style={{width: '6px', height: '6px'}} 
                        onClick={() => deleteIncome(income.income_id)}
                      />
                    </td>
                    <td>{income.income_source}</td>
                    <td>{income.income_amount}</td>
                    <td>{income.income_date.split('', 10)}</td>
                </tr>
                ))}
                
            </tbody>
        </table>







    </div>
  )
}


export default Income;