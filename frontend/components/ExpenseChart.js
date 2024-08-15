import React from 'react';
import { Bar } from 'react-chartjs-2';

const ExpenseChart = ({ expenses }) => {
  const data = {
    labels: expenses.map(exp => exp.name),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map(exp => exp.amount),
        backgroundColor: expenses.map(exp => exp.type === 'Credit' ? 'green' : 'red'),
      },
    ],
  };

  return <Bar data={data} />;
};

export default ExpenseChart;
