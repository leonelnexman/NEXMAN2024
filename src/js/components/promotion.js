setTimeout(() => {
    document.querySelector('.promotion').classList.add('visible');
}, 5000);

// Обработчик нажатия на кнопку закрытия
document.querySelector('.promotion__close').addEventListener('click', () => {
    document.querySelector('.promotion').classList.remove('visible');
});