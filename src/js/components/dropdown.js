document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 962) return; // Проверка разрешения экрана

    const serviceTops = document.querySelectorAll('.services__item-top');
    let previouslyOpenedContent = null;

    serviceTops.forEach((serviceTop) => {
        serviceTop.addEventListener('click', () => {
            const parent = serviceTop.parentElement;
            const content = parent.querySelector('.services__item-content');

            if (previouslyOpenedContent && previouslyOpenedContent !== content) {
                previouslyOpenedContent.classList.remove('visible');
                previouslyOpenedContent.style.maxHeight = 0;
                previouslyOpenedContent.parentElement.querySelector('.services__item-top').classList.remove('active');
            }

            if (content.classList.contains('visible')) {
                content.classList.remove('visible');
                content.style.maxHeight = 0;
                serviceTop.classList.remove('active');
                previouslyOpenedContent = null;
            } else {
                content.classList.add('visible');
                content.style.maxHeight = `${content.scrollHeight  }px`;
                serviceTop.classList.add('active');
                previouslyOpenedContent = content;
            }
        });
    });
});