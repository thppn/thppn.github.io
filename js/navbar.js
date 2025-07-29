document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.navbar-toggle');
    const links = document.querySelector('.navbar-links');
    toggle.addEventListener('click', function() {
        links.classList.toggle('open');
    });
    // Optional: close menu when clicking a link (on mobile)
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => links.classList.remove('open'));
    });
});

// Use slider.js fade/unfade for page transitions
function showPage(idx) {
    const pages = document.querySelectorAll('.page');
    const current = Array.from(pages).findIndex(
        p => !p.classList.contains('bg')
    );
    if (current === idx) return; // No change

    // Fade out current page, then fade in new page
    fade(pages[current]);
    pages[current].classList.add('bg');
    pages[idx].classList.remove('bg');
    unfade(pages[idx]);
}