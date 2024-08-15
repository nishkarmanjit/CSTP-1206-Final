const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// POST: Add Expense
router.post('/expense', async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).send('Error adding expense');
  }
});

// GET: Get Expenses
router.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.query.userId });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).send('Error fetching expenses');
  }
});

// DELETE: Delete Expense
router.delete('/expense/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).send('Expense deleted');
  } catch (error) {
    res.status(500).send('Error deleting expense');
  }
});

module.exports = router;
