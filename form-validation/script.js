document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  // Name Validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email Validation
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password Validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Confirm Password
  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // you can reset form or send data to server here
    document.getElementById("signupForm").reset();
  }
});
