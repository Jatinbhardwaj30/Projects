// Handle form submission for login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Assuming login is successful
    localStorage.setItem("profileName", "user");

    // Redirect to the index.html (outside login folder)
    window.location.href = "../Pages/profile_index.html"; // Adjust path if necessary
});

// Handle form submission for signup
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Assuming signup is successful
    localStorage.setItem("profileName", "user");

    // Redirect to the index.html (outside login folder)
    window.location.href = "../index.html"; // Adjust path if necessary
});

// Toggle between login and signup forms
document.getElementById("show-signup").addEventListener("click", function() {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".signup-container").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function() {
    document.querySelector(".signup-container").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
});
