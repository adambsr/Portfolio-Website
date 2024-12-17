// Get the toggle button and the body element
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme preference
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️"; // Update icon for light mode
}

// Add event listener to toggle button
themeToggle.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("dark-mode");
  
  // Update button icon
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙";

  // Save theme preference
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});
