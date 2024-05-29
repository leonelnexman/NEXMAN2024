import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';

const socialsslider = new Swiper('.header__socials-slider', {
    direction: 'vertical',
    modules: [Autoplay],
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    speed: 2500, 
    spaceBetween: 1,
    resistance: true,
    resistanceRatio: 0,
    loop: true,
    allowTouchMove: false,
});

const doingnow = new Swiper('.doingnow__slider', {
    modules: [Autoplay],
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    speed: 3900,
    freeMode: true,
    autoplay: {
        delay: 10,
        disableOnInteraction: false
    },
    slidesPerView: "auto",
});

doingnow.el.addEventListener('mouseenter', () => {
    doingnow.autoplay.stop(); 
});

doingnow.el.addEventListener('mouseleave', () => {
    doingnow.autoplay.start();
});

const blogslider = new Swiper('.blog__slider', {
    modules: [FreeMode],
    spaceBetween: 15,
    slidesPerView: 3,
    breakpoints: {
        260: {
            initialSlide: 0,
            centerInsufficientSlides: true,
            freeMode: true,
            freeModeSticky: true,
            slidesPerView: 'auto'
        },
        962: {
            slidesPerView: 3
        }
    }
});