   // JavaScript for validation
 document.getElementById("registerForm").addEventListener("submit", function (event) {
    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    if (!/^[a-zA-Z]{6,}$/.test(name)) {
        nameError.textContent = "Name must contain only alphabets and be at least 6 characters long.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }
    console.log(name)


    // Email validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Phone number validation
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Phone number must contain exactly 10 digits.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Password validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});