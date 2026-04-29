const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitBtn = document.getElementById("submit-btn");

userName.addEventListener("input", () => {
    const errorMsg = userName.parentElement.querySelector(".error-message");

    if (userName.value == "") {
        errorMsg.textContent = "Username cannot be empty.";
        errorMsg.style.display = 'block';
        userName.style.border = "2px solid red";

    } else if (userName.value.length < 5) {
        errorMsg.textContent = "Username must be at least 5 characters long.";
        errorMsg.style.display = 'block';
        userName.style.border = "2px solid red";
    } else {
        userName.style.border = "2px solid green";
        errorMsg.style.display = 'none';
    }
});

email.addEventListener("input", () => {
    const errorMsg = email.parentElement.querySelector(".error-message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value == "") {
        errorMsg.textContent = "Email cannot be empty.";
        errorMsg.style.display = 'block';
        email.style.border = "2px solid red";
    } else if (!emailPattern.test(email.value)) {
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.style.display = 'block';
        email.style.border = "2px solid red";
    } else {
        email.style.border = "2px solid green";
        errorMsg.style.display = 'none';
    }
});

password.addEventListener("input", () => {
    const errorMsg = password.parentElement.querySelector(".password-requirements");
    const reqLength = document.getElementById("req-length");
    const reqUppercase = document.getElementById("req-uppercase");
    const reqNumber = document.getElementById("req-number");
    const reqSpecial = document.getElementById("req-special");

    if (password.value.length >= 10) {
        errorMsg.style.display = "block";
        reqLength.style.color = "green";
    } else {
        reqLength.style.color = "red";
    }
    if (/[A-Z]/.test(password.value)) {
        errorMsg.style.display = "block";
        reqUppercase.style.color = "green";
    } else {
        reqUppercase.style.color = "red";

    } if (/[0-9]/.test(password.value)) {
        errorMsg.style.display = "block";
        reqNumber.style.color = "green";
    } else {
        reqNumber.style.color = "red";

    } if (/[!@#$%^&*]/.test(password.value)) {
        errorMsg.style.display = "block";
        reqSpecial.style.color = "green";
    } else {
        reqSpecial.style.color = "red";
    };

    if (password.value.length >= 10 && /[A-Z]/.test(password.value) && /[0-9]/.test(password.value) && /[!@#$%^&*]/.test(password.value)) {
        password.style.border = "2px solid green";
        errorMsg.style.display = "none";
    } else {
        password.style.border = "2px solid red";
    }
});

confirmPassword.addEventListener("input", () => {
    const errorMsg = confirmPassword.parentElement.querySelector(".error-message");

    if (confirmPassword.value == "") {
        errorMsg.textContent = "Please confirm your password.";
        errorMsg.style.display = 'block';
        confirmPassword.style.border = "2px solid red";
    } else if (confirmPassword.value !== password.value) {
        errorMsg.textContent = "Passwords do not match.";
        errorMsg.style.display = 'block';
        confirmPassword.style.border = "2px solid red";
    } else {
        confirmPassword.style.border = "2px solid green";
        errorMsg.style.display = 'none';
    }
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Registration successful!");
    }
});