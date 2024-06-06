const menuBtn = document.querySelector('.header__menu-btn');
const navbar = document.querySelector('.navbar');
const {body} = document;

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('visible');
    body.classList.toggle('no-scroll');
});

document.addEventListener("DOMContentLoaded", () => {
    const menubar = document.querySelector('.menubar');
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';

    if (isHomePage) {
        menubar.classList.add('main');
    }
});