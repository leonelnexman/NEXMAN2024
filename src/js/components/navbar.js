const menuBtn = document.querySelector('.header__menu-btn');
const navbar = document.querySelector('.navbar');
const {body} = document; // Select the body element
let scrollPosition = 0;

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('visible');
    
    if (navbar.classList.contains('visible')) {
        // Save the current scroll position
        scrollPosition = window.scrollY;
        // Add overflow: hidden to the body
        body.style.overflow = 'hidden';
    } else {
        // Restore the scroll position
        window.scrollTo(0, scrollPosition);
        // Remove overflow: hidden from the body
        body.style.overflow = '';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const menubar = document.querySelector('.menubar');
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

    if (isHomePage) {
        menubar.classList.add('main-menubar');
    }
});
