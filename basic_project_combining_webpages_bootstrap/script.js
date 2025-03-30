// Show the login form (simulating login here)
function showLogin() {
    window.location.href = "login/login.html"; 
}

// After login, change button to profile with dropdown
function loginSuccess(username) {
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('profile-dropdown').style.display = 'block';
    document.getElementById('profile-btn').textContent = `Welcome, ${username}`;
}

// Simulating logout
function logout() {
    document.getElementById('profile-dropdown').style.display = 'none';
    document.getElementById('login-btn').style.display = 'block';
    localStorage.removeItem('username'); 
    alert("Logged out successfully");
}
