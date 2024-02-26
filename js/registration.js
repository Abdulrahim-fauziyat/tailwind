// registration.js



document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const surName = document.getElementById('surName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Save user data to local storage (You may need a more secure method)
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('surName', surName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Registration successfull! ');
        window.location.href = 'login.html';
    });
});
