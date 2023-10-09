// const loginForm = document.getElementById('loginForm');

//         loginForm.addEventListener('submit', function (e) {
//             e.preventDefault();

//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

            
//             if (!email || !password) {
//                 alert('Please enter both email and password.');
//                 return;
//             }

            
//             window.location.href = 'dashboard.html';
//         });

document.querySelector('#loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    const matchedUser = userData.find(user => user.email === loginEmail && user.password === loginPassword);

    if (matchedUser) {
        // alert('Login Successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid login credentials. Please try again.');
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     // Select the login form
//     const loginForm = document.querySelector('#loginForm');

//     // Add a submit event listener to the login form
//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Get user input for login
//         const loginEmail = document.getElementById('loginEmail').value;
//         const loginPassword = document.getElementById('loginPassword').value;

//         // Retrieve user data from localStorage
//         const userData = JSON.parse(localStorage.getItem('userData')) || [];

//         // Check if the provided login credentials match any stored user data
//         const matchedUser = userData.find(user => user.email === loginEmail && user.password === loginPassword);

//         if (matchedUser) {
//             // Successful login, redirect to index.html
//             window.location.href = 'index.html';
//         } else {
//             // Invalid login credentials, show an error message
//             alert('Incorrect email or password. Please try again.');
//         }
//     });
// });