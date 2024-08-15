const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const userRoutes = require('./routes/users');
app.use('/api', userRoutes);

const expenseRoutes = require('./routes/expenses');
app.use('/api', expenseRoutes);


mongoose.connect('mongodb://localhost:27017/expense_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"));

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
