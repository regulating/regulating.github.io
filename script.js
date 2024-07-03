document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);


    const typingText = `const portfolio = new Portfolio();
portfolio.display();`;

    let index = 0;
    function type() {
        if (index < typingText.length) {
            document.querySelector('.typing-animation').textContent += typingText.charAt(index);
            index++;
            setTimeout(type, 100);                                  
        }
    }
    setTimeout(type, 3500); 
});
