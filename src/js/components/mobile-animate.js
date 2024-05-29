function toggleAnimations() {
    const elements = document.querySelectorAll('.animate__animated');
    if (window.innerWidth < 962) {
        elements.forEach(element => {
            element.classList.remove('animate__animated');
        });
    } else {
        elements.forEach(element => {
            element.classList.add('animate__animated');
        });
    }
}

document.addEventListener('DOMContentLoaded', toggleAnimations);

window.addEventListener('resize', toggleAnimations);