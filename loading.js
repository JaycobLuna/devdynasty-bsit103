document.addEventListener('DOMContentLoaded', function () {
    const loadingContainer = document.getElementById('loading-container');
    const loadingVideo = document.getElementById('loading-video');

    setTimeout(() => {
        loadingContainer.style.display = 'none'; // Hide the loading container after 4 seconds
        // You can add additional logic or page transitions here
    }, 5000);
});