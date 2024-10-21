function validateForm() {
  // Clear any existing errors
  document.getElementById("error").innerText = "";

  // Get form values
  const loginPassword = document.getElementById("loginPassword").value;
  const loginEmail = document.getElementById("loginEmail").value;
  
  // Validate name
  if (loginPassword.trim() === "") {
    document.getElementById("error").innerText = "password is required.";
    return false; // Prevent form submission
  }
  
  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //Validate password
  const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if (!emailPattern.test(loginEmail)) {
    document.getElementById("loginEmailError").innerText = "Invalid email address.";
    return false; // Prevent form submission
  };
  /*
  if(!strongPasswordPattern.test(loginPassword)){
    document.getElementById("error").innerText = "please enter a strong password.";
    
    return false; // Prevent form submission
  }*/

  // If all checks pass, form is submitted
  return true;
}
