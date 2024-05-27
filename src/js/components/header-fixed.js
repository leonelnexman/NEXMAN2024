let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз
        header.classList.remove('fixed');
    } else {
        // Прокрутка вверх
        header.classList.add('fixed');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    if (currentScroll > 90) {
        header.classList.add('static');
    } else {
        header.classList.remove('static');
    }
});