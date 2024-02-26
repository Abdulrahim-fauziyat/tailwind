// login.js
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from local storage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            // Redirect to quiz page
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password');
        }
    });
});
