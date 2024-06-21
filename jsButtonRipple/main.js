const button = document.querySelector('.btn');

button.addEventListener('mousemove', (event) => {
    const x = event.clientX - button.getBoundingClientRect().left;
    const y = event.clientY - button.getBoundingClientRect().top;

    button.style.setProperty("--xPos", x + 'px');
    button.style.setProperty("--yPos", y + 'px');
});