
import React from 'react';
import './Expense.css';

const Expense = ({ expense, deleteExpense }) => {
  return (
    <div className='expense-cont'>
      <div className='expense-cont-grp'>
        <p className='expense-type-icon'>
          {expense.category === 'Food/Beverage' ? '🍕' : expense.category === 'Travel/Commute' ? '🚗' : '🛍️'}
        </p>
        <div>
          <h3>{expense.description}</h3>
          <p>{expense.category}</p>
        </div>
      </div>
      <div className='expense-cont-grp'>
        <div>
          <h3>₹{expense.amount.toFixed(2)}</h3>
          <p>{expense.date}</p>
        </div>
        <button onClick={deleteExpense}>❌</button>
      </div>
    </div>
  );
}

export default Expense;





