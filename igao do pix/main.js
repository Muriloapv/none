<script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>

    const btn = document.querySelector('#btn');
    const jsConfetti = new JSConfetti();

    btn.addEventListener('click', () => {
        jsConfetti.addConfetti()
    })