import styles from './styles.module.css';

function ExpenseItem({ title, amount, id }) {
  return (
    <div>
      <span>{title}</span>
      <span>-</span>
      <span>{amount}</span>
    </div>
  );
}
export default ExpenseItem;
