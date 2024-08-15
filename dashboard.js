document.addEventListener('DOMContentLoaded', () => {
    const userNameElem = document.getElementById('user-name');
    const expenseForm = document.getElementById('expense-form');
    const expenseHistory = document.getElementById('expense-history');
    const totalAmountElem = document.getElementById('total-amount');

    // Retrieve and display username
    const username = localStorage.getItem('username');
    if (username) {
        userNameElem.textContent = `Welcome, ${username}!`;
    } else {
        userNameElem.textContent = 'Welcome, Guest!';
    }

    let totalExpenses = 0;

    expenseForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the default way

        // Get input values
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const paymentMethod = document.getElementById('payment-method').value;

        // Create a new list item for the expense
        const listItem = document.createElement('li');
        listItem.textContent = `${description}: $${amount.toFixed(2)}`;
        
        // Add a class based on the payment method
        if (paymentMethod === 'credit') {
            listItem.classList.add('credit');
        } else {
            listItem.classList.add('debit');
        }

        // Append the new item to the history
        expenseHistory.appendChild(listItem);

        // Update total expenses
        totalExpenses += amount;
        totalAmountElem.textContent = `$${totalExpenses.toFixed(2)}`;

        // Clear the form fields
        expenseForm.reset();
    });
});
