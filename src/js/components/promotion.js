setTimeout(() => {
    const promotionElement = document.querySelector('.promotion');
    if (promotionElement) {
        promotionElement.classList.add('visible');
    }
}, 5000);

// Обработчик нажатия на кнопку закрытия
const closeButton = document.querySelector('.promotion__close');
if (closeButton) {
    closeButton.addEventListener('click', () => {
        const promotionElement = document.querySelector('.promotion');
        if (promotionElement) {
            promotionElement.classList.remove('visible');
        }
    });
}
