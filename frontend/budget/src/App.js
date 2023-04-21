// imports
import './App.css';
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import BankAccounts from "./components/BankAccounts";
import MonthlyTotals from './components/MonthlyTotals';


function App() {
  return (
    <div className="App" style={{}}>

      <div>
        <BankAccounts />
      </div>

      <div style={{paddingTop: '25px'}}>
        <Income />
      </div>

      <div style={{paddingTop: '25px'}}>
        <Expenses />
      </div>

      <div style={{paddingTop: '25px'}}>
        <MonthlyTotals />
      </div>

    </div>
  );
}

export default App;
