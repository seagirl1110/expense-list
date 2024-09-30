import ExpenseItem from '../expenseItem';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses.data);

  return (
    <div>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </div>
  );
}
export default ExpenseList;
