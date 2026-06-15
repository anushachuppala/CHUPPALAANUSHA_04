document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  console.log("JS Loaded");
  console.log(logoutBtn);

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();

      alert("Logout Clicked");

      localStorage.removeItem("loggedInUser");

      window.location.href = "index.html";
    });
  }
});
