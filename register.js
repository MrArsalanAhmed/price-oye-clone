document.querySelector('#registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Create an object to store user data
            const userData = {
                fullName,
                email,
                password
            };

            const existingData = JSON.parse(localStorage.getItem('userData')) || [];
            existingData.push(userData);
            localStorage.setItem('userData', JSON.stringify(existingData));

            // Redirect to the login page after successful registration
            // window.location.href = 'login.html';

    Swal.fire({
        title: 'Registration Successful',
        text: 'You have successfully registered!',
        icon: 'success',
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: 'OK'
    }).then(() => {
        // Redirect to the login page after the user clicks "OK" in the alert
        window.location.href = 'login.html';
    });
});