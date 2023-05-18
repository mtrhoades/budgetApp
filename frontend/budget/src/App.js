// imports
import './App.css';
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import BankAccounts from "./components/BankAccounts";
import MonthlyTotals from './components/MonthlyTotals';


function App() {
  return (
    <div className="App" 
    style={{padding: '10rem', width: '100vw', display: 'flex', justifyContent: 'space-evenly'}}
    >

      <div>
        <BankAccounts />

        <div style={{paddingTop: '60px'}}>
          <Income />
        </div>

      </div>

      <div>
        <Expenses />
      </div>

      <div>
        <MonthlyTotals />
      </div>


    </div>
  );
}

export default App;
