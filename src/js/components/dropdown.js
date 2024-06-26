document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 962) return;

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

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.navbar__item-top');

    function handleItemClick(event) {
        event.preventDefault();

        const content = this.nextElementSibling;
        const isActive = this.classList.contains('active');

        items.forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.navbar__item-content').forEach(c => {
            c.classList.remove('active');
            c.style.maxHeight = null;
        });

        if (!isActive) {
            this.classList.add('active');
            if (content) {
                content.classList.add('active');
                content.style.maxHeight = `${content.scrollHeight}px`;
            }
        }
    }

    function handleResize() {
        if (window.innerWidth < 962) {
            items.forEach(item => {
                item.addEventListener('click', handleItemClick);
            });
        } else {
            items.forEach(item => {
                item.removeEventListener('click', handleItemClick);
                const content = item.nextElementSibling;
                if (content) {
                    content.classList.remove('active');
                    content.style.maxHeight = null;
                }
                item.classList.remove('active');
            });
        }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.position__top').forEach((topElement) => {
        topElement.addEventListener('click', function() {
            const item = this.closest('.position__item');
            const content = item.querySelector('.position__content');

            if (item.classList.contains('open')) {
                item.classList.remove('open');
                content.style.maxHeight = '';
            } else {
                const contentHeight = content.scrollHeight;
                item.classList.add('open');
                content.style.maxHeight = `${contentHeight  }px`;
            }
        });
    });
});
