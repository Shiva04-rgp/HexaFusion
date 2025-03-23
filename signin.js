// Toggle between Sign Up and Login forms
document.getElementById('login-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

document.getElementById('signup-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('signup-container').style.display = 'block';
});
[u]
// Form Submission Handling for Sign Up
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Add your signup logic here
    console.log('Sign Up Form Submitted');
    alert('Sign Up Successful!');
});

// Form Submission Handling for Login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    console.log('Login Form Submitted');
    alert('Login Successful!');
});

// Form Submission Handling for Forgot Password
document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    // Add your forgot password logic here
    console.log('Reset link sent to:', email);
    alert('A password reset link has been sent to your email.');
});