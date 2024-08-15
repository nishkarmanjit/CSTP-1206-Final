import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ userId, setExpenses }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Credit');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = { name, description, category, amount, type, user: userId };
    const res = await axios.post('http://localhost:3001/api/expense', newExpense);
    setExpenses(prev => [...prev, res.data]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Expense name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Your Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input type="number" placeholder="Amount $" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Credit">Credit</option>
        <option value="Debit">Debit</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
