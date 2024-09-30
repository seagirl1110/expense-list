import styles from './styles.module.css';
import { useState } from 'react';
import { addExpenseToList } from '../../redux/slices/expenseSlice';
import { useDispatch } from 'react-redux';

function ExpenseForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', amount: '' });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addExpenseToList({ ...formData, id: Date.now() }));
    setFormData({ title: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.title}
        name="title"
        onChange={handleChange}
        type="text"
        placeholder="title"
      />
      <input
        value={formData.amount}
        name="amount"
        onChange={handleChange}
        type="text"
        placeholder="amount"
      />
      <button>Add expense</button>
    </form>
  );
}
export default ExpenseForm;
