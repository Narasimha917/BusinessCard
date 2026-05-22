document.addEventListener('DOMContentLoaded', () => {
    const flipCardInner = document.querySelector('.flip-card-inner');

    // Safe Flipping mechanism on trigger event clicks
    flipCardInner.addEventListener('click', () => {
        const isFlipped = flipCardInner.style.transform === 'rotateY(180deg)';
        flipCardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });

    // Auto-flip hint sequence for new viewers after 6 seconds instead of 10
    setTimeout(() => {
        if (!flipCardInner.style.transform || flipCardInner.style.transform === 'rotateY(0deg)') {
            flipCardInner.style.transform = 'rotateY(180deg)';
        }
    }, 6000);
});
