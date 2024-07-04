document.addEventListener("DOMContentLoaded", function () {
    // loading screen
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
    }, 2000); // timeout duration

    // typing animation
    const typingAnimation = document.querySelector(".typing-animation");
    const text = "Music Producer & DJ | Full-   Stack Developer | Open Source Contributor";
    let index = 0;

    function type() {
        typingAnimation.textContent = text.slice(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(type, 100);
        } else {
            index = 0;
            setTimeout(type, 3000); 
        }
    }

    type();
});
