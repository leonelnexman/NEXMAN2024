function removeAnimationClasses() {
    const fadeInUpElements = document.querySelectorAll('.animate__fadeInUp');
    const fadeInDownElements = document.querySelectorAll('.animate__fadeInDown');
    const fadeInLeftElements = document.querySelectorAll('.animate__fadeInLeft');
    const WowDelete = document.querySelectorAll('.wow');
    const ZoomInLeftElements = document.querySelectorAll('.animate__zoomIn');
    const Animated = document.querySelectorAll('.animate__animated');

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
        ZoomInLeftElements.forEach(element => {
            element.classList.remove('animate__zoomIn');
        });
        WowDelete.forEach(element => {
            element.classList.remove('wow');
        });
        Animated.forEach(element => {
            element.classList.remove('animate__animated');
        });
    }
}

document.addEventListener('DOMContentLoaded', removeAnimationClasses);
window.addEventListener('resize', removeAnimationClasses);;