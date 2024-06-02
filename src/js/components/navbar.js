const menuBtn = document.querySelector('.header__menu-btn');
const navbar = document.querySelector('.navbar');
const {body} = document;

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('visible');
    body.classList.toggle('no-scroll');
});

