document.addEventListener("DOMContentLoaded", function () {
    // Fade out loading screen
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = 1;

    setTimeout(function () {
        loadingScreen.style.transition = "opacity 1s";
        loadingScreen.style.opacity = 0;
        setTimeout(function () {
            loadingScreen.style.display = "none";
        }, 1000); // Make sure this matches the transition duration
    }, 2000); // timeout duration

    // Initialize Typed.js
    new Typed('.dynamic-text', {
        strings: ["Developer", "Designer", "DJ"],
        typeSpeed: 100,
        backSpeed: 50,  
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',  // Define the cursor character
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    const currentPage = window.location.href;

    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Loop through each link
    navLinks.forEach(function(link) {
        // Check if the link's href matches the current page URL
        if (link.href === currentPage) {
            link.classList.add('active'); // Add active class to the matching link
        }
    });
});

    