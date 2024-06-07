document.addEventListener('DOMContentLoaded', () => {
    const socials = document.querySelector('.header__socials');
    const socialsList = document.querySelector('.header__socials-list');
    let hideTimeout;

    if (socials && socialsList) {
        socials.addEventListener('mouseover', () => {
            clearTimeout(hideTimeout);
            socialsList.classList.add('visible');
        });

        socials.addEventListener('mouseout', (e) => {
            if (!socials.contains(e.relatedTarget) && !socialsList.contains(e.relatedTarget)) {
                hideTimeout = setTimeout(() => {
                    socialsList.classList.remove('visible');
                }, 500);
            }
        });

        socialsList.addEventListener('mouseover', () => {
            clearTimeout(hideTimeout);
            socialsList.classList.add('visible');
        });

        socialsList.addEventListener('mouseout', (e) => {
            if (!socialsList.contains(e.relatedTarget) && !socials.contains(e.relatedTarget)) {
                hideTimeout = setTimeout(() => {
                    socialsList.classList.remove('visible');
                }, 300);
            }
        });

        window.addEventListener('scroll', () => {
            clearTimeout(hideTimeout);
            socialsList.classList.remove('visible');
        });
    }
});
