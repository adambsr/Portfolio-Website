// Function to validate email as user types
function validateEmailOnInput() {
  const emailInput = document.getElementById("email");
  const errorSpan = document.getElementById("email-error");

  if (!validateEmail(emailInput.value.trim())) {
    errorSpan.textContent = "Adresse email invalide!";
  } else {
    errorSpan.textContent = ""; // Clear error message
  }
}

// Helper function to validate email format
function validateEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
