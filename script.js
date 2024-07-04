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

    // typing animation
    const typingAnimation = document.querySelector(".typing-animation");
    const professions = [
        "Music Producer & DJ",
        "Full-Stack Developer",
        "Open Source Contributor"
    ];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentProfession = professions[professionIndex];
        if (isDeleting) {
            // deleting characters
            typingAnimation.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // typing characters
            typingAnimation.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentProfession.length) {
            setTimeout(function () {
                isDeleting = true;
            }, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex++;
            if (professionIndex === professions.length) {
                professionIndex = 0;
            }
            setTimeout(function () {
                charIndex = 0;
                type();
            }, 500);
        } else {
            setTimeout(type, 100);
        }
    }
    
    // Start typing animation
    setTimeout(type, 1000); // Initial delay before typing starts
});
