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
        strings: ["Developer", "Designer", "Coder"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',  // Define the cursor character
    });
});
