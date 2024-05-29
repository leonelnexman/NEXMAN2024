function removeAnimationClasses() {
    const fadeInUpElements = document.querySelectorAll('.animate__fadeInUp');
    const fadeInDownElements = document.querySelectorAll('.animate__fadeInDown');
    const fadeInLeftElements = document.querySelectorAll('.animate__fadeInLeft');
    const WowDelete = document.querySelectorAll('.wow');

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
        WowDelete.forEach(element => {
            element.classList.remove('wow');
        });
    }
}

document.addEventListener('DOMContentLoaded', removeAnimationClasses);
window.addEventListener('resize', removeAnimationClasses);;