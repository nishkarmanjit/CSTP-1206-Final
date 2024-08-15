import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import ExpenseHistory from './ExpenseHistory';
import ExpenseChart from './ExpenseChart';

const Dashboard = ({ userId }) => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchExpenses = async () => {
      const res = await axios.get('http://localhost:3001/api/expenses', { params: { userId } });
      setExpenses(res.data);
      calculateTotal(res.data);
    };

    fetchExpenses();
  }, [userId]);

  const calculateTotal = (expenses) => {
    const total = expenses.reduce((acc, exp) => {
      return exp.type === 'Credit' ? acc + exp.amount : acc - exp.amount;
    }, 0);
    setTotal(total);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/expense/${id}`);
    setExpenses(expenses.filter(exp => exp._id !== id));
    calculateTotal(expenses);
  };

  return (
    <div>
      <ExpenseForm userId={userId} setExpenses={setExpenses} />
      <ExpenseHistory expenses={expenses} handleDelete={handleDelete} />
      <h3>Total: ${total}</h3>
      <ExpenseChart expenses={expenses} />
    </div>
  );
};

export default Dashboard;
