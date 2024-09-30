import './App.css';
import ExpenseForm from './components/expenseForm';
import ExpenseList from './components/expenseList';

function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}

export default App;
