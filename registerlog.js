document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.querySelector('.form-container form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting normally

        // Get the values from the form
        var name = document.getElementById("nameInput").value;
        var course = document.getElementById("courseInput").value;

        // Perform any validation here if needed

        // Display a confirmation message with the user's first name
        alert("Registration successful! Proceed to login page, " + name);

        // Redirect to the login page after a slight delay
        setTimeout(function() {
            window.location.href = "login.html";
        }, 100);
    });
});

//