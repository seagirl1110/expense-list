import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    data: [],
  },
  reducers: {
    addExpenseToList: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addExpenseToList } = expenseSlice.actions;

export default expenseSlice.reducer;
