
import React from 'react';
import './Dashboard.css';
import Expense from '../Expense/Expense';

const Dashboard = ({ expenses, deleteExpense }) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className='dashboard-cont'>
      <h1>Hello, Pranav</h1>
      <div className="expense-total">
        <p>Total:</p>
        <h2> ₹{total.toFixed(2)}</h2>
      </div>
      <div className='breakdown-head'>
        <h3>Breakdown</h3>
        <p>🔻</p>
      </div>
      <div className='user-expense-cont'>
        {expenses.map((expense, index) => (
          <Expense key={index} expense={expense} deleteExpense={() => deleteExpense(index)} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;





