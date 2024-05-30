if (!localStorage.getItem('cookiesAccepted')) {
    document.querySelector('.cookies').classList.add('visible');
}

document.querySelector('.cookies__btn').addEventListener('click', () => {
    document.querySelector('.cookies').classList.remove('visible');
    localStorage.setItem('cookiesAccepted', 'true');
});