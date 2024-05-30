const menuBtn = document.querySelector('.header__menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function() {
    // Переключение класса 'active' для кнопки меню
    this.classList.toggle('active');
    // Добавление/удаление класса 'visible' для навигационного меню
    navbar.classList.toggle('visible');
});