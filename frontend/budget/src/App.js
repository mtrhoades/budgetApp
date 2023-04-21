// imports
import './App.css';
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import BankAccounts from "./components/BankAccounts";
import MonthlyTotals from './components/MonthlyTotals';


function App() {
  return (
    <div className="App">
      <BankAccounts />
      <Income />
      <Expenses />
      <MonthlyTotals />
    </div>
  );
}

export default App;
