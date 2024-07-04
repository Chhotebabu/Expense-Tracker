
import React, { useState, useEffect } from 'react';
import './AddExpense.css';

const AddExpense = ({ addExpense }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (!description && category) {
      setDescription(category);
    }
  }, [category, description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && description && category) {
      addExpense({ amount: parseFloat(amount), description, category, date: new Date().toLocaleDateString() });
      setAmount('');
      setDescription('');
      setCategory('');
    }
  };

  return (
    <div className='expense'>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className='first-form'>
          <label className='amount-label' htmlFor="amount">₹</label>
          <input type="text" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className='second-form'>
          <label className='description-label' htmlFor="description">🏷️</label>
          <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='category-form'>
          <label>Category:</label><br />
          <input type="radio" id="food" name="category" value="Food/Beverage" checked={category === 'Food/Beverage'} onChange={(e) => setCategory(e.target.value)} />
          <label htmlFor="food">Food/Beverage</label><br />
          <input type="radio" id="travel" name="category" value="Travel/Commute" checked={category === 'Travel/Commute'} onChange={(e) => setCategory(e.target.value)} />
          <label htmlFor="travel">Travel/Commute</label><br />
          <input type="radio" id="shopping" name="category" value="Shopping" checked={category === 'Shopping'} onChange={(e) => setCategory(e.target.value)} />
          <label htmlFor="shopping">Shopping</label><br /><br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default AddExpense;





