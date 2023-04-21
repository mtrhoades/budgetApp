// imports
import './App.css';
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import BankAccounts from "./components/BankAccounts";
import MonthlyTotals from './components/MonthlyTotals';


function App() {
  return (
    <div className="App" style={{width: '1500px'}}>

      <div>
        <BankAccounts />
      </div>

      <div>
        <Income />
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
