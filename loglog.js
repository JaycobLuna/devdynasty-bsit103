document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.querySelector('.form-container form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting normally

        // Get the values from the form
        var name = document.getElementById("nameInput").value;
        var course = document.getElementById("courseInput").value;

        // Perform any validation here if needed

        // Display a confirmation message with the user's first name
        alert("Login successful! Enjoy the game, " + name);

        // Redirect to the level selector page after a slight delay
        setTimeout(function() {
            window.location.href = "levelselector.html";
        }, 100);
    });
});
