document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    localStorage.setItem(username, password);
    alert('Registration successful! You can now login.');
    window.location.href = 'login.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        alert('Login successful!');
        // Redirect to user dashboard or homepage
    } else {
        alert('Login failed. Please check your username and password.');
    }
});
