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

// Logout
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("currentUser");

    alert("Logged Out Successfully");

    window.location.href = "index.html";
  });
}
