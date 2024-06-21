const textArea = document.getElementById('textarea');

const totalCounter = document.getElementById('total-counter')

const totalRemaining = document.getElementById('remaining-counter')

textArea.addEventListener("keydown", () => {
    updateCounter();
});


function updateCounter () {
    totalCounter.innerText = textArea.value.length

    totalRemaining.innerText = textArea.getAttribute('maxLength') - textArea.value.length
}

updateCounter();
