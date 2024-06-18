function showLogin() {
    $('#login-form').removeClass('hidden');
    $('#register-form').addClass('hidden');
}
    

function showRegister() {
    $('#register-form').addClass('hidden');
    $('#login-form').removeClass('hidden');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateRegistration() {
    // Clear previous error message
    $("#register-usernameError").html("");
    $("#register-emailError").html("");
    $("#register-passwordError").html("");

    

    // Get form values
    const username = $("#register-username").val();
    const email = $("#register-email").val();
    const password = $("#register-password").val();

    let isValid = true;

    if (username.length < 3) {
        $("#register-usernameError").html ("Username must be at least 3 characters long.");
        isValid = false;
    }

    if (!validateEmail(email)) {
        $("#register-emailError").html ("Please enter a valid email address.");
        isValid = false;
    }

    if (password.length < 6) {
        $("#register-passwordError").html ("Password must be at least 6 characters long.");
        isValid = false;
    }

    if (isValid) {
        // Store user data in an object
        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Save the user data in localStorage
        localStorage.setItem("userData", JSON.stringify(userData));

        // Redirect to a different page 
        alert("Registration successful!");
        showLogin();
    }

    return false; 
}

function validateLogin() {
    // Clear previous error messages
    $("#login-usernameError").HTML = ("");
    $("#login-passwordError").HTML = ("");

    const username = $("#login-username").val();
    const password = $("#login-password").val();

    // Retrieve stored user data 
    const storedData = localStorage.getItem("userData");
    const userData = storedData ? JSON.parse(storedData) : null;

    let isValid = true;

    // Validate username and password
    console.log("Entered username:", username);
    console.log("Entered password:", password);
    console.log("Stored user data:", userData);

    if (!userData || userData.username !== username || userData.password !== password) {
        document.getElementById("login-usernameError").innerHTML = "Invalid username or password.";
        isValid = false;
    }

    if (isValid) {
        // Redirect to a different page
        window.location.href = "https://www.iamdave.ai/";
    }

    return false;
}
