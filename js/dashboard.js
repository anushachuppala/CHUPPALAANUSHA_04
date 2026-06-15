// Check if user is logged in
const user = localStorage.getItem("loggedInUser");

if (!user) {
  window.location.href = "login.html";
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Not logged in
if (!currentUser) {
  window.location.href = "index.html";
}

// Show user name
const username = document.getElementById("username");

if (username) {
  username.textContent = currentUser.fullName;
}

// Logout Function
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const confirmLogout = confirm("Are you sure you want to logout?");

  if (confirmLogout) {
    // Remove user session data
    localStorage.removeItem("loggedInUser");

    // Redirect to login page
    window.location.href = "login.html";
  }
});
