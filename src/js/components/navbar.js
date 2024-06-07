function preventScroll(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

const menuBtn = document.querySelector('.header__menu-btn');
const navbar = document.querySelector('.navbar');
let scrollPosition = 0;

function disableScroll() {
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
}

function enableScroll() {
    window.removeEventListener('scroll', preventScroll, { passive: false });
    window.removeEventListener('wheel', preventScroll, { passive: false });
    window.removeEventListener('touchmove', preventScroll, { passive: false });
}

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('visible');
    
    if (navbar.classList.contains('visible')) {
        // Save the current scroll position
        scrollPosition = window.scrollY;

        // Disable scroll
        disableScroll();
    } else {
        // Enable scroll
        enableScroll();

        // Restore the scroll position
        window.scrollTo(0, scrollPosition);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const menubar = document.querySelector('.menubar');
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

    if (isHomePage) {
        menubar.classList.add('main');
    }
});