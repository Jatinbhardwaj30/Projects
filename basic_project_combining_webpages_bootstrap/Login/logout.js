document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("profileName");
    window.location.href = "../login.html"; // Redirect to login page after logout
});
