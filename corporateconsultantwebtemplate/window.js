// Show the custom popup when the page loads
window.onload = function() {
    const popup = document.getElementById('custom-popup');
    const overlay = document.getElementById('popup-overlay');
    const closeButton = document.getElementById('close-popup');

    // Display popup and overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';

    // Close popup when "OK" button is clicked
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
};
