document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const username = document.getElementById('username').value;

        // To store username in localStorage
        localStorage.setItem('username', username);

        // This will redirect to dashboard
        window.location.href = 'dashboard.html';
    });
});
