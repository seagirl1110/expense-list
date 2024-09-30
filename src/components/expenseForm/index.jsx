import styles from './styles.module.css';
import { useState } from 'react';
import { addExpenseToList } from '../../redux/slices/expenseSlice';
import { useDispatch } from 'react-redux';
import { notification } from 'antd';

function ExpenseForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', amount: '' });

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (pauseOnHover) => () => {
    api.open({
      message: 'Notification',
      description: `Add '${formData.title}' with amount ${formData.amount}`,
      showProgress: true,
      pauseOnHover,
    });
  };

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addExpenseToList({ ...formData, id: Date.now() }));
    setFormData({ title: '', amount: '' });
    openNotification(true)();
  };

  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <input
          required
          value={formData.title}
          name="title"
          onChange={handleChange}
          type="text"
          placeholder="title"
        />
        <input
          required
          value={formData.amount}
          name="amount"
          onChange={handleChange}
          type="number"
          placeholder="amount"
        />

        <button>Add expense</button>
      </form>
    </>
  );
}
export default ExpenseForm;
