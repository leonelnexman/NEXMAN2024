function removeAnimationClasses() {
    const fadeInUpElements = document.querySelectorAll('.animate__fadeInUp');
    const fadeInDownElements = document.querySelectorAll('.animate__fadeInDown');
    const fadeInLeftElements = document.querySelectorAll('.animate__fadeInLeft');

    if (window.innerWidth < 962) {
        fadeInUpElements.forEach(element => {
            element.classList.remove('animate__fadeInUp');
        });
        fadeInDownElements.forEach(element => {
            element.classList.remove('animate__fadeInDown');
        });
        fadeInLeftElements.forEach(element => {
            element.classList.remove('animate__fadeInLeft');
        });
    }
}

document.addEventListener('DOMContentLoaded', removeAnimationClasses);
window.addEventListener('resize', removeAnimationClasses);;