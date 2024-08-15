import React from 'react';

const ExpenseHistory = ({ expenses, handleDelete }) => {
  return (
    <div>
      <h3>Expense History</h3>
      <ul>
        {expenses.map(exp => (
          <li key={exp._id}>
            {exp.name} - ${exp.amount} <button onClick={() => handleDelete(exp._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseHistory;
